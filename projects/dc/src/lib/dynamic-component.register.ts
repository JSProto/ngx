import { ComponentRef, EventEmitter, Injectable, OnDestroy, reflectComponentType, Type } from '@angular/core'
import { Subject, Subscription, takeUntil } from 'rxjs'

export interface DynamicOutputPayload<T, TComponent> {
  data: T
  componentRef: ComponentRef<TComponent>
}

export interface DynamicOutputEmission<T, TComponent> {
  output: string
  value: DynamicOutputPayload<T, TComponent>
}

@Injectable()
export class DynamicComponentRegister implements OnDestroy {
  private readonly inputs = new Set<string>()
  private readonly outputs = new Set<string>()
  private readonly inputValues = new Map<string, unknown>()
  private readonly _events$ = new Subject<DynamicOutputEmission<unknown, unknown>>()

  private componentRef?: ComponentRef<unknown>

  private component?: Type<unknown>

  readonly events$ = this._events$.asObservable()

  readonly destroy$ = new Subject<void>()

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  registerComponentRef<T>(component: Type<T>, componentRef: ComponentRef<T>): void {
    const mirror = reflectComponentType(component)

    if (mirror) {
      const subscriptions: Subscription[] = []

      this.componentRef = componentRef
      this.component = component

      this.inputs.clear()
      this.outputs.clear()

      console.log('registerComponentRef')

      mirror.inputs.forEach((input) => {
        this.inputs.add(input.propName)

        if (this.inputValues.has(input.propName)) {
          componentRef.setInput(input.propName, this.inputValues.get(input.propName))
        }
      })

      mirror.outputs.forEach((output) => {
        this.outputs.add(output.propName)

        const emitter = (componentRef.instance as any)[output.templateName] as EventEmitter<
          DynamicOutputPayload<unknown, Type<unknown>>
        >

        console.log(`output.propName(${output.propName}):`, this.inputValues.has(output.propName))

        subscriptions.push(
          emitter.pipe(takeUntil(this.destroy$)).subscribe((value) =>
            this._events$.next({
              output: output.propName,
              value: {
                data: value,
                componentRef,
              },
            }),
          ),
        )
      })

      this.componentRef.onDestroy(() => {
        subscriptions.forEach((subscription) => {
          if (!subscription.closed) subscription.unsubscribe()
        })
      })
    } else {
      console.error(`Could not determine mirror for ${component} to determine inputs and outputs`)
    }
  }

  setInput<T = unknown>(propName: string, value: T): void {
    this.inputValues.set(propName, value)

    if (
      this.inputs.has(propName) &&
      this.componentRef &&
      (this.componentRef.instance as Record<string, unknown>)[propName] !== value
    ) {
      this.componentRef.setInput(propName, value)
    } else {
      console.warn(`${this.component} does not have an input configured with @Input called "${propName}".`)
    }
  }
}
