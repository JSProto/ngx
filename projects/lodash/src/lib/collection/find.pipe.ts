import { Pipe, PipeTransform } from '@angular/core'
import { find } from 'lodash'

@Pipe({
  name: '_find',
})
export class FindPipe implements PipeTransform {
  transform = find
}
