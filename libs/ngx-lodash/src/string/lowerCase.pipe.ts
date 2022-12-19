import { Pipe, PipeTransform } from '@angular/core'
import { lowerCase } from 'lodash'

@Pipe({
  name: '_lowerCase',
})
export class LowerCasePipe implements PipeTransform {
  transform = lowerCase
}
