import { Component, EventEmitter, Input, Output } from '@angular/core'
import { TestidAdapterDirective } from './testid.directive'

@Component({
  selector: 'ngx-plugin-view',
  templateUrl: './plugin-view.component.html',
  styleUrls: ['./plugin-view.component.scss'],
})
export class PluginViewComponent implements TestidAdapterDirective {
  @Input() datas!: { id: number }
  @Output() send = new EventEmitter<{ id: number }>()
}
