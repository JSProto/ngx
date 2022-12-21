import { Pipe, PipeTransform } from '@angular/core'
import { unionBy } from 'lodash'

@Pipe({
  name: '_unionBy',
})
export class UnionByPipe implements PipeTransform {
  transform = unionBy
}
