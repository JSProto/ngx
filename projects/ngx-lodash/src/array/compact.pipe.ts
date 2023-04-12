import { Pipe, PipeTransform } from '@angular/core'
import { compact } from 'lodash'

@Pipe({
  name: '_compact',
})
export class CompactPipe implements PipeTransform {
  transform = compact
}
