import { Pipe, PipeTransform } from '@angular/core'
import { sampleSize } from 'lodash'

@Pipe({
  name: '_sampleSize',
})
export class SampleSizePipe implements PipeTransform {
  transform = sampleSize
}
