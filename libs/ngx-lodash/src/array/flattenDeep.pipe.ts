import { Pipe, PipeTransform } from '@angular/core'
import { flattenDeep } from 'lodash'

@Pipe({
  name: '_flattenDeep',
})
export class FlattenDeepPipe implements PipeTransform {
  transform = flattenDeep
}
