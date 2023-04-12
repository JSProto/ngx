import { Pipe, PipeTransform } from '@angular/core'
import { fill } from 'lodash'

@Pipe({
  name: '_fill',
})
export class FillPipe implements PipeTransform {
  transform = fill
}
