import { Pipe, PipeTransform } from '@angular/core'
import { concat } from 'lodash'

@Pipe({
  name: '_concat',
})
export class ConcatPipe implements PipeTransform {
  transform = concat
}
