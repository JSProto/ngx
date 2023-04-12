import { Pipe, PipeTransform } from '@angular/core'
import { join } from 'lodash'

@Pipe({
  name: '_join',
})
export class JoinPipe implements PipeTransform {
  transform = join
}
