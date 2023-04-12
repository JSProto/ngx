import { Pipe, PipeTransform } from '@angular/core'
import { pick } from 'lodash'

@Pipe({
  name: '_pick',
})
export class PickPipe implements PipeTransform {
  transform = pick
}
