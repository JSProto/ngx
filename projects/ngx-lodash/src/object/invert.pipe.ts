import { Pipe, PipeTransform } from '@angular/core'
import { invert } from 'lodash'

@Pipe({
  name: '_invert',
})
export class InvertPipe implements PipeTransform {
  transform = invert
}
