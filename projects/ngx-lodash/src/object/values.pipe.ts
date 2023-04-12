import { Pipe, PipeTransform } from '@angular/core'
import { values } from 'lodash'

@Pipe({
  name: '_values',
})
export class ValuesPipe implements PipeTransform {
  transform = values
}
