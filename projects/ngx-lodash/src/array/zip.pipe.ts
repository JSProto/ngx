import { Pipe, PipeTransform } from '@angular/core'
import { zip } from 'lodash'

@Pipe({
  name: '_zip',
})
export class ZipPipe implements PipeTransform {
  transform = zip
}
