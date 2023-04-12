import { Pipe, PipeTransform } from '@angular/core'
import { difference } from 'lodash'

@Pipe({
  name: '_difference',
})
export class DifferencePipe implements PipeTransform {
  transform = difference
}
