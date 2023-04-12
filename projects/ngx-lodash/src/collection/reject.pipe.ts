import { Pipe, PipeTransform } from '@angular/core'
import { reject } from 'lodash'

@Pipe({
  name: '_reject',
})
export class RejectPipe implements PipeTransform {
  transform = reject
}
