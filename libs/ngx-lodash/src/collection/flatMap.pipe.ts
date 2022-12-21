import { Pipe, PipeTransform } from '@angular/core'
import { flatMap } from 'lodash'

@Pipe({
  name: '_flatMap',
})
export class FlatMapPipe implements PipeTransform {
  transform = flatMap
}
