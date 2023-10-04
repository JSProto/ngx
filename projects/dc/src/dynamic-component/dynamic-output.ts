import { EventEmitter, inject } from '@angular/core'
import { filter, takeUntil } from 'rxjs'
import { DynamicComponentRegister, DynamicOutputEmission } from './dynamic-component.register'

/**
 * ```
 * @Component({})
 * class MyDynamicComponent {
 *     @Output() send = new EventEmmitter;
 * }
 * 
 * @Directive({
 *     selector: "[myDynamicComponentWrapper]",
 * })
 * class MyDynamicDirective {
 *     @DynamicOutput() @Output() send = new EventEmmitter;
 * }
 * ```
 *
 * ```
 * <div dc myDynamicComponentWrapper (send)="sendData()"></div>
 * ```
 */
export function DynamicOutput() {
  return (target: unknown, propertyName: string) => {
    const registerMap = new WeakMap<any, DynamicComponentRegister>()

    Object.defineProperty(target, propertyName, {
      set(value: EventEmitter<DynamicOutputEmission<unknown, unknown>>) {
        this[`_${propertyName}`] = value

        let registry = registerMap.get(this)

        if (!registry) {
          registry = inject(DynamicComponentRegister)

          registerMap.set(this, registry)

          registry.events$
            .pipe(
              filter((event) => event.output === propertyName),
              takeUntil(registry.destroy$),
            )
            .subscribe((eventValue) => value.emit(eventValue))
        }

        registry.setInput(propertyName, value)
      },
      get(): EventEmitter<unknown> {
        return this[`_${propertyName}`]
      },
    })
  }
}
