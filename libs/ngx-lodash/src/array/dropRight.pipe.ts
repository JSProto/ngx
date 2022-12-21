import { Pipe, PipeTransform } from '@angular/core'
import { dropRight } from 'lodash'

@Pipe({
  name: '_dropRight',
})
export class DropRightPipe implements PipeTransform {
  transform = dropRight
}
