import { Pipe, PipeTransform } from '@angular/core'
import { findLast } from 'lodash'

@Pipe({
  name: '_findLast',
})
export class FindLastPipe implements PipeTransform {
  transform = findLast
}
