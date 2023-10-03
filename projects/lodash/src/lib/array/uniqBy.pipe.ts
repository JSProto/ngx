import { Pipe, PipeTransform } from '@angular/core'
import { uniqBy } from 'lodash'

@Pipe({
  name: '_uniqBy',
})
export class UniqByPipe implements PipeTransform {
  transform = uniqBy
}
