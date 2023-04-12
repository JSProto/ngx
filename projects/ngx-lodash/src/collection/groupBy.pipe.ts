import { Pipe, PipeTransform } from '@angular/core'
import { groupBy } from 'lodash'

@Pipe({
  name: '_groupBy',
})
export class GroupByPipe implements PipeTransform {
  transform = groupBy
}
