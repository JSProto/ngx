import { Pipe, PipeTransform } from '@angular/core'
import { repeat } from 'lodash'

@Pipe({
  name: '_repeat',
})
export class RepeatPipe implements PipeTransform {
  transform = repeat
}
