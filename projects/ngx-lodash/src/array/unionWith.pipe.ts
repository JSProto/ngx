import { Pipe, PipeTransform } from '@angular/core'
import { unionWith } from 'lodash'

@Pipe({
  name: '_unionWith',
})
export class UnionWithPipe implements PipeTransform {
  transform = unionWith
}
