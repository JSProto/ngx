import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent {
  @Input() url!: string
  @Output() send = new EventEmitter<string>()
}
