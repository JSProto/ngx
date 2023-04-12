import { Pipe, PipeTransform } from '@angular/core'
import { keyBy } from 'lodash'

@Pipe({
  name: '_keyBy',
})
export class KeyByPipe implements PipeTransform {
  transform = keyBy
}
