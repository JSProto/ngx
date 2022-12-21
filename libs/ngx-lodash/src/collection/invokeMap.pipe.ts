import { Pipe, PipeTransform } from '@angular/core'
import { invokeMap } from 'lodash'

@Pipe({
  name: '_invokeMap',
})
export class InvokeMapPipe implements PipeTransform {
  transform = invokeMap
}
