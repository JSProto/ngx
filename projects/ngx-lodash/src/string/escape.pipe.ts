import { Pipe, PipeTransform } from '@angular/core'
import { escape } from 'lodash'

@Pipe({
  name: '_escape',
})
export class EscapePipe implements PipeTransform {
  transform = escape
}
