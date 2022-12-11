import { Pipe, PipeTransform } from '@angular/core'
import { sortBy } from 'lodash'

@Pipe({
  name: '_sortBy',
})
export class SortByPipe implements PipeTransform {
  transform = sortBy
}
