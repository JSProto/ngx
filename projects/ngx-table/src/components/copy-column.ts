import { ClipboardModule } from '@angular/cdk/clipboard'
import { CdkTextColumn } from '@angular/cdk/table'
import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'ngx-copy-column',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, ClipboardModule, MatTableModule],
  template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        <span>{{ headerText }}</span>
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        <ng-container *ngIf="dataAccessor(data, name) as value">
          <span [cdkCopyToClipboard]="value">{{ value }}</span>
        </ng-container>
      </td>
    </ng-container>
  `,
})
export class NgxCopyColumn<T> extends CdkTextColumn<T> {}
