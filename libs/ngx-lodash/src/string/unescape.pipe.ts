import { Pipe, PipeTransform } from '@angular/core'
import { unescape } from 'lodash'

@Pipe({
  name: '_unescape',
})
export class UnescapePipe implements PipeTransform {
  transform = unescape
}
