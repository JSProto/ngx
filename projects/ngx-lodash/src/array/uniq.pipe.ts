import { Pipe, PipeTransform } from '@angular/core'
import { uniq } from 'lodash'

@Pipe({
  name: '_uniq',
})
export class UniqPipe implements PipeTransform {
  transform = uniq
}
