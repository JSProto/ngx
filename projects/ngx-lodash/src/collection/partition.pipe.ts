import { Pipe, PipeTransform } from '@angular/core'
import { partition } from 'lodash'

@Pipe({
  name: '_partition',
})
export class PartitionPipe implements PipeTransform {
  transform = partition
}
