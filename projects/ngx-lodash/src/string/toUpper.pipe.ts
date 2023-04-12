import { Pipe, PipeTransform } from '@angular/core'
import { toUpper } from 'lodash'

@Pipe({
  name: '_toUpper',
})
export class ToUpperPipe implements PipeTransform {
  transform = toUpper
}
