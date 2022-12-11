import { Pipe, PipeTransform } from '@angular/core'
import { pickBy } from 'lodash'

@Pipe({
  name: '_pickBy',
})
export class PickByPipe implements PipeTransform {
  transform = pickBy
}
