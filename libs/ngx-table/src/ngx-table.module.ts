import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatTableModule } from '@angular/material/table'

import { NgxCopyColumn } from './components/copy-column'
import { NgxDateTimeColumn } from './components/date-time-column'
import { NgxImgColumn } from './components/img-column'
import { NgxTextColumn } from './components/text-column'

const columns = [NgxCopyColumn, NgxTextColumn, NgxDateTimeColumn, NgxImgColumn]

@NgModule({
  imports: [CommonModule, MatTableModule, ...columns],
  declarations: [],
  exports: [...columns],
})
export class NgxTableModule {}
