import { Pipe, PipeTransform } from '@angular/core'
import { dropWhile } from 'lodash'

@Pipe({
  name: '_dropWhile',
})
export class DropWhilePipe implements PipeTransform {
  transform = dropWhile
}
