import { Pipe, PipeTransform } from '@angular/core'
import { camelCase } from 'lodash'

@Pipe({
  name: '_camelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform = camelCase
}
