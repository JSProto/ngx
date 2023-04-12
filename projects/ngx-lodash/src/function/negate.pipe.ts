import { Pipe, PipeTransform } from '@angular/core'
import { negate } from 'lodash'

@Pipe({
  name: '_negate',
})
export class NegatePipe implements PipeTransform {
  transform = negate
}
