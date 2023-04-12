import { Pipe, PipeTransform } from '@angular/core'
import { upperFirst } from 'lodash'

@Pipe({
  name: '_upperFirst',
})
export class UpperFirstPipe implements PipeTransform {
  transform = upperFirst
}
