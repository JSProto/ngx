import { Pipe, PipeTransform } from '@angular/core'
import { flatMapDepth } from 'lodash'

@Pipe({
  name: '_flatMapDepth',
})
export class FlatMapDepthPipe implements PipeTransform {
  transform = flatMapDepth
}
