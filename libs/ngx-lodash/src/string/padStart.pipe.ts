import { Pipe, PipeTransform } from '@angular/core'
import { padStart } from 'lodash'

@Pipe({
  name: '_padStart',
})
export class PadStartPipe implements PipeTransform {
  transform = padStart
}
