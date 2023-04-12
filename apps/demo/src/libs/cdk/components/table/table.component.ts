import { DecimalPipe } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'

import { NgxTableModule } from '@this/ngx-table'

import { User } from './example'

@Component({
  selector: 'table-example',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatTableModule, NgxTableModule],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'uid',
    'username',
    'email',
    'avatar',
    'gender',
    'phone_number',
    'social_insurance_number',
    'date_of_birth',
  ]
  dataSource = new MatTableDataSource<User>([])

  decimalPipe = new DecimalPipe('en-US')
  constructor(@Inject(HttpClient) private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<User[]>(`https://random-data-api.com/api/v2/users?size=100`, { observe: 'body', responseType: 'json' })
      .subscribe((data) => {
        this.dataSource.data = data
      })
  }

  getWeight = (data: User): string => {
    const result = this.decimalPipe.transform(data.address.coordinates.lat, '1.0-2')
    return result === null ? '' : result
  }
}
