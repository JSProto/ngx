import { CdkTextColumn } from '@angular/cdk/table'
import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'ngx-img-column',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, MatTableModule],
  template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{ headerText }}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        <!-- <img class="icon" [src]="dataAccessor(data, name)" /> -->
      </td>
    </ng-container>
  `,
})
export class NgxImgColumn<T> extends CdkTextColumn<T> {}
