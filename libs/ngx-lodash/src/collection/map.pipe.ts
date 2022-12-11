import { Pipe, PipeTransform } from '@angular/core'
import { map } from 'lodash'

@Pipe({
  name: '_map',
})
export class MapPipe implements PipeTransform {
  transform = map
}
