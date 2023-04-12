import { Pipe, PipeTransform } from '@angular/core'
import { snakeCase } from 'lodash'

@Pipe({
  name: '_snakeCase',
})
export class SnakeCasePipe implements PipeTransform {
  transform = snakeCase
}
