import { Pipe, PipeTransform } from '@angular/core'
import first from 'lodash/first'

@Pipe({
  name: '_first',
})
export class FirstPipe implements PipeTransform {
  transform = first
}
