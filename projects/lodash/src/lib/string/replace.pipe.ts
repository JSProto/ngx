import { Pipe, PipeTransform } from '@angular/core'
import { replace } from 'lodash'

@Pipe({
  name: '_replace',
})
export class ReplacePipe implements PipeTransform {
  transform = replace
}
