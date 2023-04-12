import { Pipe, PipeTransform } from '@angular/core'
import { uniqWith } from 'lodash'

@Pipe({
  name: '_uniqWith',
})
export class UniqWithPipe implements PipeTransform {
  transform = uniqWith
}
