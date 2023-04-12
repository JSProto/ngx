import { Pipe, PipeTransform } from '@angular/core'
import { reverse } from 'lodash'

@Pipe({
  name: '_reverse',
})
export class ReversePipe implements PipeTransform {
  transform = reverse
}
