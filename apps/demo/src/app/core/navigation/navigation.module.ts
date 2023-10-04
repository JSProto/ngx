import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router'

import { NgxLodashPipeModule } from '@jsproto/ngx-lodash'

import { NgForTrackByKeyDirective } from '../ng-for-track-by-key.directive'

import { NavigationComponent } from './navigation.component'

@NgModule({
  imports: [CommonModule, RouterModule, NgxLodashPipeModule, MatListModule, MatIconModule, MatExpansionModule],
  declarations: [NavigationComponent, NgForTrackByKeyDirective],
  exports: [NavigationComponent],
})
export class NavigationModule {}
