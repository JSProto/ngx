import { Pipe, PipeTransform } from '@angular/core'
import { findLastIndex } from 'lodash'

@Pipe({
  name: '_findLastIndex',
})
export class FindLastIndexPipe implements PipeTransform {
  transform = findLastIndex
}
