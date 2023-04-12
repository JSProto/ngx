import { CdkTextColumn } from '@angular/cdk/table'
import { CommonModule, DatePipe } from '@angular/common'
import { Component, Pipe, PipeTransform, ViewEncapsulation } from '@angular/core'
import { MatTableModule } from '@angular/material/table'

@Pipe({
  name: 'timestamp',
  standalone: true,
})
export class TimestampPipe implements PipeTransform {
  transform(value: any): any {
    return typeof value === 'number' ? value * 1000 : value
  }
}

@Component({
  selector: 'ngx-date-time-column',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, MatTableModule, DatePipe, TimestampPipe],
  template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{ headerText }}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        <ng-container *ngIf="dataAccessor(data, name) as value; else isEmpty">
          <div class="date">{{ value | timestamp | date : 'dd.MM.yy' }}</div>
          <div class="time">{{ value | timestamp | date : 'HH:mm' }}</div>
        </ng-container>

        <ng-template #isEmpty> </ng-template>
      </td>
    </ng-container>
  `,
})
export class NgxDateTimeColumn<T> extends CdkTextColumn<T> {}
