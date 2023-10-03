import { Pipe, PipeTransform } from '@angular/core'
import { inRange } from 'lodash'

@Pipe({
  name: '_inRange',
})
export class InRangePipe implements PipeTransform {
  transform = inRange
}
