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
 *     selector: "[myDynamicComponentWrapper]",
 * })
 * class MyDynamicDirective {
 *     @DynamicInput() @Input() loading = false;
 * }
 * ```
 *
 * ```
 * <div dc myDynamicComponentWrapper [loading]="loading$ | async"></div>
 * ```
 */
export function DynamicInput() {
  return (target: unknown, propertyName: string) => {
    const registerMap = new WeakMap<any, DynamicComponentRegister>()

    Object.defineProperty(target, propertyName, {
      set(value: unknown) {
        this[`_${propertyName}`] = value
        let register = registerMap.get(this)

        if (!register) {
          register = inject(DynamicComponentRegister)

          registerMap.set(this, register)
        }

        register.setInput(propertyName, value)
      },
      get(): unknown {
        return this[`_${propertyName}`]
      },
    })
  }
}
