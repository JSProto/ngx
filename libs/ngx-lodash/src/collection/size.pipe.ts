import { Pipe, PipeTransform } from '@angular/core'
import { size } from 'lodash'

@Pipe({
  name: '_size',
})
export class SizePipe implements PipeTransform {
  transform = size
}
