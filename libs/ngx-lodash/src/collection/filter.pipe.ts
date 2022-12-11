import { Pipe, PipeTransform } from '@angular/core'
import { filter } from 'lodash'

@Pipe({
  name: '_filter',
})
export class FilterPipe implements PipeTransform {
  transform = filter
}
