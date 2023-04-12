import { Pipe, PipeTransform } from '@angular/core'
import { lowerFirst } from 'lodash'

@Pipe({
  name: '_lowerFirst',
})
export class LowerFirstPipe implements PipeTransform {
  transform = lowerFirst
}
