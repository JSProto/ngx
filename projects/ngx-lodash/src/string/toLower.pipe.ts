import { Pipe, PipeTransform } from '@angular/core'
import { toLower } from 'lodash'

@Pipe({
  name: '_toLower',
})
export class ToLowerPipe implements PipeTransform {
  transform = toLower
}
