import { Pipe, PipeTransform } from '@angular/core'
import { dropRightWhile } from 'lodash'

@Pipe({
  name: '_dropRightWhile',
})
export class DropRightWhilePipe implements PipeTransform {
  transform = dropRightWhile
}
