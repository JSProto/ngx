import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ngx-plugin-view',
  templateUrl: './plugin-view.component.html',
  styleUrls: ['./plugin-view.component.scss'],
})
export class PluginViewComponent {
  @Input() data!: { id: number }
  @Output() send = new EventEmitter<{ id: number }>()
}
