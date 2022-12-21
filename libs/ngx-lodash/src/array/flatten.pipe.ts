import { Pipe, PipeTransform } from '@angular/core'
import { flatten } from 'lodash'

@Pipe({
  name: '_flatten',
})
export class FlattenPipe implements PipeTransform {
  transform = flatten
}
