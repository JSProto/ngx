import { Pipe, PipeTransform } from '@angular/core'
import { xorBy } from 'lodash'

@Pipe({
  name: '_xorBy',
})
export class XorByPipe implements PipeTransform {
  transform = xorBy
}
