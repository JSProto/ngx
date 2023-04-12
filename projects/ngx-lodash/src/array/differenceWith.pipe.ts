import { Pipe, PipeTransform } from '@angular/core'
import { differenceWith } from 'lodash'

@Pipe({
  name: '_differenceWith',
})
export class DifferenceWithPipe implements PipeTransform {
  transform = differenceWith
}
