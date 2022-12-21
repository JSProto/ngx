import { Pipe, PipeTransform } from '@angular/core'
import { chunk } from 'lodash'

@Pipe({
  name: '_chunk',
})
export class ChunkPipe implements PipeTransform {
  transform = chunk
}
