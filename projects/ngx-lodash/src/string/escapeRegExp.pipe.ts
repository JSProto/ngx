import { Pipe, PipeTransform } from '@angular/core'
import { escapeRegExp } from 'lodash'

@Pipe({
  name: '_escapeRegExp',
})
export class EscapeRegExpPipe implements PipeTransform {
  transform = escapeRegExp
}
