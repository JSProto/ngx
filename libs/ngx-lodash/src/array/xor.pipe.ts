import { Pipe, PipeTransform } from '@angular/core'
import { xor } from 'lodash'

@Pipe({
  name: '_xor',
})
export class XorPipe implements PipeTransform {
  transform = xor
}
