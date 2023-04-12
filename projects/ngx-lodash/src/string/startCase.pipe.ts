import { Pipe, PipeTransform } from '@angular/core'
import { startCase } from 'lodash'

@Pipe({
  name: '_startCase',
})
export class StartCasePipe implements PipeTransform {
  transform = startCase
}
