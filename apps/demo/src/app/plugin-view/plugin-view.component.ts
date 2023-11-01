import { Component } from '@angular/core'
import { TestAdapterPlugin } from './testid.directive'

@Component({
  selector: 'ngx-plugin-view',
  templateUrl: './plugin-view.component.html',
})
export class PluginViewComponent extends TestAdapterPlugin {

}
