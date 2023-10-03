import { Pipe, PipeTransform } from '@angular/core'
import { without } from 'lodash'

@Pipe({
  name: '_without',
})
export class WithoutPipe implements PipeTransform {
  transform = without
}
