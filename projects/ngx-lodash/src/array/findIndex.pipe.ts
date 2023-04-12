import { Pipe, PipeTransform } from '@angular/core'
import { findIndex } from 'lodash'

@Pipe({
  name: '_findIndex',
})
export class FindIndexPipe implements PipeTransform {
  transform = findIndex
}
