import { Pipe, PipeTransform } from '@angular/core'
import { xorWith } from 'lodash'

@Pipe({
  name: '_xorWith',
})
export class XorWithPipe implements PipeTransform {
  transform = xorWith
}
