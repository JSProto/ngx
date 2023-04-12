import { Pipe, PipeTransform } from '@angular/core'
import { takeWhile } from 'lodash'

@Pipe({
  name: '_takeWhile',
})
export class TakeWhilePipe implements PipeTransform {
  transform = takeWhile
}
