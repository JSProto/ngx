import { NgComponentOutlet } from '@angular/common'
import {
  AfterViewInit,
  ComponentRef,
  Directive,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Type,
  forwardRef,
  inject,
  reflectComponentType,
} from '@angular/core'

export function returnProvider(component: Type<any>) {
  return { provide: ComponentRef, useExisting: forwardRef(() => component) }
}

@Directive({
  selector: '[ngComponentOutlet]',
  exportAs: 'NgxComponentOutletOutputs',
  standalone: true,
})
export class NgComponentOutletOutputs<C = unknown> implements OnInit, AfterViewInit, DoCheck, OnChanges {
  private componentOutlet = inject(NgComponentOutlet, { self: true })

  @Input() ngComponentOutletOutputs!: Record<string, EventEmitter<any>>

  private _outputsUsed = new Map<string, boolean>()

  private componentRef: ComponentRef<C> | undefined
  private get _componentRef(): ComponentRef<C> | undefined {
    // @ts-ignore
    return this.componentOutlet._componentRef
  }

  private get _instance(): Record<string, EventEmitter<any>> | undefined {
    return this._componentRef?.instance as Record<string, EventEmitter<any>>
  }

  constructor(private parentComponentRef: ComponentRef<C>) {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngDoCheck(): void {
    if (this._componentRef) {
      if (this.ngComponentOutletOutputs) {
        this._outputsUsed.clear()

        for (const outputName of Object.keys(this.ngComponentOutletOutputs)) {
          this._outputsUsed.set(outputName, true)
        }
      }

      this._applyOutputStateDiff(this._componentRef)
    }
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    console.log('_componentRef', this._componentRef?.instance)
  }

  ngOnInit(): void {
    // console.log('parentComponentRef', this.parentComponentRef, this.componentOutlet)
    // const mirror = reflectComponentType(this.componentOutlet.ngComponentOutlet!)
    // console.log('mirror?.outputs', mirror?.outputs)
    // mirror?.outputs.forEach((output) => {
    //   const emitter = (componentRef.instance as any)[output.templateName] as EventEmitter<
    //     DynamicOutputPayload<unknown, Type<unknown>>
    //   >
    //   console.log(`output.propName(${output.propName}):`, this.inputValues.has(output.propName))
    //   subscriptions.push(
    //     emitter.pipe(takeUntil(this.destroy$)).subscribe((value) =>
    //       this._events$.next({
    //         output: output.propName,
    //         value: {
    //           data: value,
    //           componentRef,
    //         },
    //       }),
    //     ),
    //   )
    // })
  }

  private _applyOutputStateDiff(componentRef: ComponentRef<unknown>) {
    const mirror = reflectComponentType(this.componentOutlet.ngComponentOutlet!)

    const subscriptions = mirror?.outputs.map(({ propName }) => {
      const emitter = (componentRef.instance as any)[propName] as EventEmitter<any>
      const event = this.ngComponentOutletOutputs![propName] as EventEmitter<any>
      return emitter.subscribe((value) => event.next(value))
    })

    this.componentRef?.onDestroy(() => {
      subscriptions?.forEach((subscription) => {
        if (!subscription.closed) subscription.unsubscribe()
      })
    })
  }
}
