import { Pipe, PipeTransform } from '@angular/core'
import { intersection } from 'lodash'

@Pipe({
  name: '_intersection',
})
export class IntersectionPipe implements PipeTransform {
  transform = intersection
}
