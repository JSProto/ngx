import { CdkTextColumn } from '@angular/cdk/table'
import { CommonModule } from '@angular/common'
import { Component, Input, ViewEncapsulation } from '@angular/core'
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'ngx-text-column',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, MatTableModule],
  template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{ headerText }}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{ dataAccessor(data, name) }}
      </td>
    </ng-container>
  `,
})
export class NgxTextColumn<T> extends CdkTextColumn<T> {
  @Input() sticky!: any
}
