import { EventEmitter, inject } from '@angular/core'
import { filter, takeUntil } from 'rxjs'
import { DynamicComponentRegister } from './dynamic-component.register'

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
      set(value: EventEmitter<unknown>) {
        this[`__${propertyName}`] = value

        let register = registerMap.get(this)

        console.log(`@DynamicOutput() setInput(${propertyName})`)

        if (!register) {
          register = inject(DynamicComponentRegister)

          registerMap.set(this, register)

          register.events$
            .pipe(
              filter(({ output }) => output === propertyName),
              takeUntil(register.destroy$),
            )
            .subscribe((event) => value.emit(event.value.data))
        }

        register.setInput(propertyName, value)
      },
      get(): EventEmitter<unknown> {
        return this[`__${propertyName}`]
      },
    })
  }
}
