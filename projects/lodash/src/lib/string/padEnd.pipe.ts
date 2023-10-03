import { Pipe, PipeTransform } from '@angular/core'
import { padEnd } from 'lodash'

@Pipe({
  name: '_padEnd',
})
export class PadEndPipe implements PipeTransform {
  transform = padEnd
}
