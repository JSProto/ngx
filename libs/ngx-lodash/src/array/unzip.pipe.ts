import { Pipe, PipeTransform } from '@angular/core'
import { unzip } from 'lodash'

@Pipe({
  name: '_unzip',
})
export class UnzipPipe implements PipeTransform {
  transform = unzip
}
