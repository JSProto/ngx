import { Pipe, PipeTransform } from '@angular/core'
import { takeRight } from 'lodash'

@Pipe({
  name: '_takeRight',
})
export class TakeRightPipe implements PipeTransform {
  transform = takeRight
}
