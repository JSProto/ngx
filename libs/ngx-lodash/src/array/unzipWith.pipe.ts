import { Pipe, PipeTransform } from '@angular/core'
import { unzipWith } from 'lodash'

@Pipe({
  name: '_unzipWith',
})
export class UnzipWithPipe implements PipeTransform {
  transform = unzipWith
}
