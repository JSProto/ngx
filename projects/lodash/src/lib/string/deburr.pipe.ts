import { Pipe, PipeTransform } from '@angular/core'
import { deburr } from 'lodash'

@Pipe({
  name: '_deburr',
})
export class DeburrPipe implements PipeTransform {
  transform = deburr
}
