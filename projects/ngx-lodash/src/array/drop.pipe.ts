import { Pipe, PipeTransform } from '@angular/core'
import { drop } from 'lodash'

@Pipe({
  name: '_drop',
})
export class DropPipe implements PipeTransform {
  transform = drop
}
