import { Directive, EventEmitter, Input, Output, forwardRef } from '@angular/core'
import { NgDynamicDirective } from '@jsproto/dc2'

@Directive({
  selector: '[plugin.component.test]',
  standalone: true,
  providers: [
    {
      provide: NgDynamicDirective,
      useExisting: forwardRef(() => PluginTestAdapterDirective),
    },
  ],
})
export class PluginTestAdapterDirective {
  @Input() url!: string
  @Output() send = new EventEmitter<string>()
}
