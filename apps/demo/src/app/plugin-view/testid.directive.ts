import { Directive, EventEmitter, Input, Output, forwardRef } from '@angular/core'
import { NgDynamicDirective } from '@jsproto/ngx-dc'

@Directive({
  selector: '[plugin.component.test]',
  standalone: true,
  providers: [{ provide: NgDynamicDirective, useExisting: forwardRef(() => TestAdapterPlugin) }],
})
export class TestAdapterPlugin extends NgDynamicDirective {
  @Input() debug!: boolean // can bind with qs
  @Input() url!: string // can bind with qs
  @Output() send = new EventEmitter<string>()

}
