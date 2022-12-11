import { Pipe, PipeTransform } from '@angular/core'
import { nth } from 'lodash'

@Pipe({
  name: '_nth',
})
export class NthPipe implements PipeTransform {
  transform = nth
}
