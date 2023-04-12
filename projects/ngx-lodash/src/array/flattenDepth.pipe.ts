import { Pipe, PipeTransform } from '@angular/core'
import { flattenDepth } from 'lodash'

@Pipe({
  name: '_flattenDepth',
})
export class FlattenDepthPipe implements PipeTransform {
  transform = flattenDepth
}
