import { Pipe, PipeTransform } from '@angular/core'
import { fromPairs } from 'lodash'

@Pipe({
  name: '_fromPairs',
})
export class FromPairsPipe implements PipeTransform {
  transform = fromPairs
}
