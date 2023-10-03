import { Pipe, PipeTransform } from '@angular/core'
import last from 'lodash/last'

@Pipe({
  name: '_last',
})
export class LastPipe implements PipeTransform {
  transform = last
}
