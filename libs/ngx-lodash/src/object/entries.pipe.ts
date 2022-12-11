import { Pipe, PipeTransform } from '@angular/core'
import { entries } from 'lodash'

@Pipe({
  name: '_entries',
})
export class EntriesPipe implements PipeTransform {
  transform = entries
}
