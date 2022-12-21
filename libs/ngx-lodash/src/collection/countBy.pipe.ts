import { Pipe, PipeTransform } from '@angular/core'
import { countBy } from 'lodash'

@Pipe({
  name: '_countBy',
})
export class CountByPipe implements PipeTransform {
  transform = countBy
}
