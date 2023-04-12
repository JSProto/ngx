import { Pipe, PipeTransform } from '@angular/core'
import { takeRightWhile } from 'lodash'

@Pipe({
  name: '_takeRightWhile',
})
export class TakeRightWhilePipe implements PipeTransform {
  transform = takeRightWhile
}
