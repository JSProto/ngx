import { Pipe, PipeTransform } from '@angular/core'
import { truncate } from 'lodash'

@Pipe({
  name: '_truncate',
})
export class TruncatePipe implements PipeTransform {
  transform = truncate
}
