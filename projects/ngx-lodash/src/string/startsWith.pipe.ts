import { Pipe, PipeTransform } from '@angular/core'
import { startsWith } from 'lodash'

@Pipe({
  name: '_startsWith',
})
export class StartsWithPipe implements PipeTransform {
  transform = startsWith
}
