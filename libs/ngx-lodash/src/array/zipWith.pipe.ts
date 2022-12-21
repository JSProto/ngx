import { Pipe, PipeTransform } from '@angular/core'
import { zipWith } from 'lodash'

@Pipe({
  name: '_zipWith',
})
export class ZipWithPipe implements PipeTransform {
  transform = zipWith
}
