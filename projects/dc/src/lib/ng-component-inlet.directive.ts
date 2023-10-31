import {
  ComponentRef,
  createNgModule,
  Directive,
  DoCheck,
  EventEmitter,
  Injector,
  Input,
  NgModuleRef,
  OnChanges,
  OnDestroy,
  reflectComponentType,
  SimpleChanges,
  Type,
  ViewContainerRef,
} from '@angular/core'
import { Subscription } from 'rxjs'

@Directive({
  selector: '[ngComponentInlet]',
  standalone: true,
})
export class NgComponentInlet implements OnChanges, DoCheck, OnDestroy {
  @Input() ngComponentInlet: Type<any> | null = null

  @Input() ngComponentInletInputs?: Record<string, unknown>
  @Input() ngComponentInletOutputs!: Record<string, EventEmitter<any>>

  @Input() ngComponentInletInjector?: Injector
  @Input() ngComponentInletContent?: any[][]

  @Input() ngComponentInletNgModule?: Type<any>

  private _componentRef: ComponentRef<any> | undefined
  private _moduleRef: NgModuleRef<any> | undefined

  private _inputsUsed = new Map<string, boolean>()
  private _outputsUsed = new Map<string, boolean>()

  constructor(private _viewContainerRef: ViewContainerRef) {}

  private _needToReCreateNgModuleInstance(changes: SimpleChanges): boolean {
    return changes['ngComponentInletNgModule'] !== undefined
  }

  private _needToReCreateComponentInstance(changes: SimpleChanges): boolean {
    return (
      changes['ngComponentInlet'] !== undefined ||
      changes['ngComponentInletContent'] !== undefined ||
      changes['ngComponentInletInjector'] !== undefined ||
      this._needToReCreateNgModuleInstance(changes)
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this._needToReCreateComponentInstance(changes)) {
      this._viewContainerRef.clear()
      this._inputsUsed.clear()
      this._outputsUsed.clear()
      this._componentRef = undefined

      if (this.ngComponentInlet) {
        const injector = this.ngComponentInletInjector || this._viewContainerRef.parentInjector

        if (this._needToReCreateNgModuleInstance(changes)) {
          this._moduleRef?.destroy()

          if (this.ngComponentInletNgModule) {
            this._moduleRef = createNgModule(this.ngComponentInletNgModule, getParentInjector(injector))
          } else {
            this._moduleRef = undefined
          }
        }

        this._componentRef = this._viewContainerRef.createComponent(this.ngComponentInlet, {
          injector,
          ngModuleRef: this._moduleRef,
          projectableNodes: this.ngComponentInletContent,
        })

        this._componentRef.changeDetectorRef.detectChanges()
      }
    }
  }

  ngDoCheck() {
    if (this._componentRef) {
      if (this.ngComponentInletInputs) {
        for (const inputName of Object.keys(this.ngComponentInletInputs)) {
          this._inputsUsed.set(inputName, true)
        }
      }

      if (this.ngComponentInletOutputs) {
        for (const outputName of Object.keys(this.ngComponentInletOutputs)) {
          this._outputsUsed.set(outputName, true)
        }
        this._applyOutputStateDiff(this._componentRef)
      }

      this._applyInputStateDiff(this._componentRef)
    }
  }

  ngOnDestroy() {
    this._moduleRef?.destroy()
  }

  private _applyInputStateDiff(componentRef: ComponentRef<unknown>) {
    for (const [inputName, touched] of this._inputsUsed) {
      if (!touched) {
        componentRef.setInput(inputName, undefined)
        this._inputsUsed.delete(inputName)
      } else {
        componentRef.setInput(inputName, this.ngComponentInletInputs![inputName])
        this._inputsUsed.set(inputName, false)
      }
    }
  }

  private subscriptions: Subscription[] = []

  unsubscribe() {
    this.subscriptions?.forEach((subscription) => {
      if (!subscription.closed) subscription.unsubscribe()
    })
  }

  private _applyOutputStateDiff(componentRef: ComponentRef<unknown>) {
    const mirror = reflectComponentType(this.ngComponentInlet!)

    this.unsubscribe()

    if (this.ngComponentInletOutputs) {
      this.subscriptions =
        mirror?.outputs.map(({ propName }) => {
          const emitter = (componentRef.instance as any)[propName] as EventEmitter<any>
          const event = this.ngComponentInletOutputs![propName] as EventEmitter<any>

          return emitter.asObservable().subscribe((value) => {
            // console.log('event:', event, value)
            event.next(value)
          })
        }) || []

      this._componentRef?.onDestroy(() => this.unsubscribe())

      this._componentRef?.changeDetectorRef.detectChanges()
    }
  }
}

function getParentInjector(injector: Injector): Injector {
  const parentNgModule = injector.get(NgModuleRef)
  return parentNgModule.injector
}
