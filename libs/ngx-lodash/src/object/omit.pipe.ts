import { Pipe, PipeTransform } from '@angular/core'
import { omit } from 'lodash'

@Pipe({
  name: '_omit',
})
export class OmitPipe implements PipeTransform {
  transform = omit
}
