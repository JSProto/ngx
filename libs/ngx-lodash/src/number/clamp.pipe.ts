import { Pipe, PipeTransform } from '@angular/core'
import { clamp } from 'lodash'

@Pipe({
  name: '_clamp',
})
export class ClampPipe implements PipeTransform {
  transform = clamp
}
