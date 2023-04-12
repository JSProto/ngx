import { Pipe, PipeTransform } from '@angular/core'
import { keys } from 'lodash'

@Pipe({
  name: '_keys',
})
export class KeysPipe implements PipeTransform {
  transform = keys
}
