import { Pipe, PipeTransform } from '@angular/core'
import { trimStart } from 'lodash'

@Pipe({
  name: '_trimStart',
})
export class TrimStartPipe implements PipeTransform {
  transform = trimStart
}
