import { Pipe, PipeTransform } from '@angular/core'
import { union } from 'lodash'

@Pipe({
  name: '_union',
})
export class UnionPipe implements PipeTransform {
  transform = union
}
