import { Pipe, PipeTransform } from '@angular/core'
import { trim } from 'lodash'

@Pipe({
  name: '_trim',
})
export class TrimPipe implements PipeTransform {
  transform = trim
}
