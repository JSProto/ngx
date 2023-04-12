import { Pipe, PipeTransform } from '@angular/core'
import { pad } from 'lodash'

@Pipe({
  name: '_pad',
})
export class PadPipe implements PipeTransform {
  transform = pad
}
