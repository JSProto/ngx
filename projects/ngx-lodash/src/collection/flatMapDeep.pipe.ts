import { Pipe, PipeTransform } from '@angular/core'
import { flatMapDeep } from 'lodash'

@Pipe({
  name: '_flatMapDeep',
})
export class FlatMapDeepPipe implements PipeTransform {
  transform = flatMapDeep
}
