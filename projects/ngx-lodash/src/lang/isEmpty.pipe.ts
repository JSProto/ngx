import { Pipe, PipeTransform } from '@angular/core'
import { isEmpty } from 'lodash'

@Pipe({
  name: '_isEmpty',
})
export class IsEmptyPipe implements PipeTransform {
  transform = isEmpty
}
