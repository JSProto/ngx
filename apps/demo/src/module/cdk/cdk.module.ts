import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatTableModule } from '@angular/material/table'
import { RouterModule } from '@angular/router'

import { CdkRoutingModule } from './cdk-routing.module'
import { TableComponent } from './components/table/table.component'

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, RouterModule, CdkRoutingModule, MatTableModule],
  providers: [],
  exports: [],
})
export class CdkModule {}
