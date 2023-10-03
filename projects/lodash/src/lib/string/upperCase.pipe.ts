import { Pipe, PipeTransform } from '@angular/core'
import { upperCase } from 'lodash'

@Pipe({
  name: '_upperCase',
})
export class UpperCasePipe implements PipeTransform {
  transform = upperCase
}
