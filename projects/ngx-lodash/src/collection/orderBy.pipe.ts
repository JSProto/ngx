import { Pipe, PipeTransform } from '@angular/core'
import { orderBy } from 'lodash'

@Pipe({
  name: '_orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform = orderBy
}
