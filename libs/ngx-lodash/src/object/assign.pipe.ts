import { Pipe, PipeTransform } from '@angular/core'
import { assign } from 'lodash'

@Pipe({
  name: '_assign',
})
export class AssignPipe implements PipeTransform {
  transform = assign
}
