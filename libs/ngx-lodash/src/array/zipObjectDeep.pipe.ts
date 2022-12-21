import { Pipe, PipeTransform } from '@angular/core'
import { zipObjectDeep } from 'lodash'

@Pipe({
  name: '_zipObjectDeep',
})
export class ZipObjectDeepPipe implements PipeTransform {
  transform = zipObjectDeep
}
