import { Pipe, PipeTransform } from '@angular/core'
import { endsWith } from 'lodash'

@Pipe({
  name: '_endsWith',
})
export class EndsWithPipe implements PipeTransform {
  transform = endsWith
}
