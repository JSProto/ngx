import { Pipe, PipeTransform } from '@angular/core'
import { intersectionWith } from 'lodash'

@Pipe({
  name: '_intersectionWith',
})
export class IntersectionWiintersectionWithPipe implements PipeTransform {
  transform = intersectionWith
}
