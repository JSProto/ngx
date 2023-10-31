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
  SimpleChanges,
  Type,
  ViewContainerRef,
} from '@angular/core'
import { Subscription } from 'rxjs'

/** extended angular NgComponentOutlet */
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
  private _outputsUsed = new Map<string, Subscription>()

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

      this._applyInputStateDiff(this._componentRef)
      this._applyOutputStateDiff(this._componentRef)
    }
  }

  ngOnDestroy() {
    this.unsubscribe()
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

  private _applyOutputStateDiff(componentRef: ComponentRef<unknown>) {
    this.unsubscribe()

    if (this.ngComponentInletOutputs) {
      Object.keys(this.ngComponentInletOutputs).map((propName) => {
        const event = (componentRef.instance as any)[propName] as EventEmitter<any>
        const emitter = this.ngComponentInletOutputs![propName] as EventEmitter<any>

        this._outputsUsed.set(
          propName,
          event.subscribe((value) => emitter.next(value)),
        )
      })

      this._componentRef?.onDestroy(() => this.unsubscribe())
    }
  }

  unsubscribe() {
    this._outputsUsed.forEach((subscription) => {
      if (!subscription.closed) subscription.unsubscribe()
    })

    this._outputsUsed.clear()
  }
}

function getParentInjector(injector: Injector): Injector {
  const parentNgModule = injector.get(NgModuleRef)
  return parentNgModule.injector
}
