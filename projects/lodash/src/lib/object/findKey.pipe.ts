import { Pipe, PipeTransform } from '@angular/core'
import { findKey } from 'lodash'

@Pipe({
  name: '_findKey',
})
export class FindKeyPipe implements PipeTransform {
  transform = findKey
}
