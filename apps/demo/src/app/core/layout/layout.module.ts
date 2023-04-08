import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule } from '@angular/router'

import { NavigationModule } from '../navigation'

import { LayoutComponent } from './layout.component'

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    NavigationModule,
    MatIconModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
