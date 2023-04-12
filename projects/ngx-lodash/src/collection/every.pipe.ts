import { Pipe, PipeTransform } from '@angular/core'
import { every } from 'lodash'

@Pipe({
  name: '_every',
})
export class EveryPipe implements PipeTransform {
  transform = every
}
