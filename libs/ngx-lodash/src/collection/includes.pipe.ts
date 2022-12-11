import { Pipe, PipeTransform } from '@angular/core'
import { includes } from 'lodash'

@Pipe({
  name: '_includes',
})
export class IncludesPipe implements PipeTransform {
  transform = includes
}
