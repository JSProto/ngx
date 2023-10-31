import { inject } from '@angular/core'
import { DynamicComponentRegister } from './dynamic-component.register'

/**
 * ```
 * @Component({})
 * class MyDynamicComponent {
 *     @Input() loading = false;
 * }
 *
 * @Directive({
 *     selector: "[myDynamicComponentAdapter]",
 * })
 * class MyDynamicDirective {
 *     @DynamicInput() @Input() loading = false;
 * }
 * ```
 *
 * ```
 * <div dc myDynamicComponentAdapter [loading]="loading$ | async"></div>
 * ```
 */

export function DynamicInput() {
  return (target: unknown, propertyName: string) => {
    const registerMap = new WeakMap<any, DynamicComponentRegister>()

    Object.defineProperty(target, propertyName, {
      set(value: unknown) {
        this[`__${propertyName}`] = value

        let register = registerMap.get(this)

        console.log(`@DynamicInput() setInput(${propertyName})`, this, new Error().stack)

        if (!register) {
          register = inject(DynamicComponentRegister)

          registerMap.set(this, register)
        }

        register.setInput(propertyName, value)
      },
      get(): unknown {
        return this[`__${propertyName}`]
      },
    })
  }
}
