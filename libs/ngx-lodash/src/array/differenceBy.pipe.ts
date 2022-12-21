import { Pipe, PipeTransform } from '@angular/core'
import { differenceBy } from 'lodash'

@Pipe({
  name: '_differenceBy',
})
export class DifferenceByPipe implements PipeTransform {
  transform = differenceBy
}
