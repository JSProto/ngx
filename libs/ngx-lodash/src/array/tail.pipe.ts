import { Pipe, PipeTransform } from '@angular/core'
import tail from 'lodash/tail'

@Pipe({
  name: '_tail',
})
export class TailPipe implements PipeTransform {
  transform = tail
}
