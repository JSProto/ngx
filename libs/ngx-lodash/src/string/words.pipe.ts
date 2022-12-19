import { Pipe, PipeTransform } from '@angular/core'
import { words } from 'lodash'

@Pipe({
  name: '_words',
})
export class WordsPipe implements PipeTransform {
  transform = words
}
