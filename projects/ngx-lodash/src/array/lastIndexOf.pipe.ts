import { Pipe, PipeTransform } from '@angular/core'
import { lastIndexOf } from 'lodash'

@Pipe({
  name: '_lastIndexOf',
})
export class LastIndexOfPipe implements PipeTransform {
  transform = lastIndexOf
}
