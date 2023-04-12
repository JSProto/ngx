import { Pipe, PipeTransform } from '@angular/core'
import { shuffle } from 'lodash'

@Pipe({
  name: '_shuffle',
})
export class ShufflePipe implements PipeTransform {
  transform = shuffle
}
