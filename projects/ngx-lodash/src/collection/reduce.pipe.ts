import { Pipe, PipeTransform } from '@angular/core'
import { reduce } from 'lodash'

@Pipe({
  name: '_reduce',
})
export class ReducePipe implements PipeTransform {
  transform = reduce
}
