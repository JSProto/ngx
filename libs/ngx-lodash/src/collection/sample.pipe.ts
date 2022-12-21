import { Pipe, PipeTransform } from '@angular/core'
import { sample } from 'lodash'

@Pipe({
  name: '_sample',
})
export class SamplePipe implements PipeTransform {
  transform = sample
}
