import { Pipe, PipeTransform } from '@angular/core'
import { trimEnd } from 'lodash'

@Pipe({
  name: '_trimEnd',
})
export class TrimEndPipe implements PipeTransform {
  transform = trimEnd
}
