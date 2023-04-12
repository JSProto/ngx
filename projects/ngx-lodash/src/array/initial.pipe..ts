import { Pipe, PipeTransform } from '@angular/core'
import { initial } from 'lodash'

@Pipe({
  name: '_initial',
})
export class InitialPipe implements PipeTransform {
  transform = initial
}
