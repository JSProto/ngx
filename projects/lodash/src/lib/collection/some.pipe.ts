import { Pipe, PipeTransform } from '@angular/core'
import { some } from 'lodash'

@Pipe({
  name: '_some',
})
export class SomePipe implements PipeTransform {
  transform = some
}
