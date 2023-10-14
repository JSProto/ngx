import { Component } from '@angular/core'
import { PluginTestAdapterDirective } from './testid.directive'

@Component({
  selector: 'ngx-plugin-view',
  templateUrl: './plugin-view.component.html',
  styleUrls: ['./plugin-view.component.scss'],
})
export class PluginViewComponent extends PluginTestAdapterDirective {}
