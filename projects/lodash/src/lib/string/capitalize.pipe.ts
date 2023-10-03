import { Pipe, PipeTransform } from '@angular/core'
import { capitalize } from 'lodash'

@Pipe({
  name: '_capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform = capitalize
}
