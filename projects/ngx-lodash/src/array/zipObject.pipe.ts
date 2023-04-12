import { Pipe, PipeTransform } from '@angular/core'
import { zipObject } from 'lodash'

@Pipe({
  name: '_zipObject',
})
export class ZipObjectPipe implements PipeTransform {
  transform = zipObject
}
