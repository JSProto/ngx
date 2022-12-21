import { Pipe, PipeTransform } from '@angular/core'
import { indexOf } from 'lodash'

@Pipe({
  name: '_indexOf',
})
export class IndexOfPipe implements PipeTransform {
  transform = indexOf
}
