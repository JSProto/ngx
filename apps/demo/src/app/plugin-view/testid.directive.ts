import { Directive, EventEmitter, Input, Output } from '@angular/core'
import { DynamicInput, DynamicOutput } from '@jsproto/ngx-dc'

@Directive({
  selector: '[testid]',
  standalone: true,
})
export class TestidAdapterDirective {
  @DynamicOutput() @Output() send = new EventEmitter<{ id: number }>()
  @DynamicInput() 
  @Input() datas!: { id: number }
}
