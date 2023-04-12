import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { CdkRoutingModule } from './cdk-routing.module'

@NgModule({
  imports: [CommonModule, RouterModule, CdkRoutingModule],
  declarations: [],
})
export class CdkModule {}
