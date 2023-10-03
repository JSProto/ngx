import { Pipe, PipeTransform } from '@angular/core'
import { take } from 'lodash'

@Pipe({
  name: '_take',
})
export class TakePipe implements PipeTransform {
  transform = take
}
