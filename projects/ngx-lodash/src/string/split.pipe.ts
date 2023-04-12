import { Pipe, PipeTransform } from '@angular/core'
import { split } from 'lodash'

@Pipe({
  name: '_split',
})
export class SplitPipe implements PipeTransform {
  transform = split
}
