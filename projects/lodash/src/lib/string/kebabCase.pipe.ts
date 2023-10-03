import { Pipe, PipeTransform } from '@angular/core'
import { kebabCase } from 'lodash'

@Pipe({
  name: '_kebabCase',
})
export class KebabCasePipe implements PipeTransform {
  transform = kebabCase
}
