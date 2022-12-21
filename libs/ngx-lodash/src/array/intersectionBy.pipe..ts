import { Pipe, PipeTransform } from '@angular/core'
import { intersectionBy } from 'lodash'

@Pipe({
  name: '_intersectionBy',
})
export class IntersectionByPipe implements PipeTransform {
  transform = intersectionBy
}
