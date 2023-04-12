import { Pipe, PipeTransform } from '@angular/core'
import { has } from 'lodash'

@Pipe({
  name: '_has',
})
export class HasPipe implements PipeTransform {
  transform = has
}
