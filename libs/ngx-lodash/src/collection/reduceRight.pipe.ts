import { Pipe, PipeTransform } from '@angular/core'
import { reduceRight } from 'lodash'

@Pipe({
  name: '_reduceRight',
})
export class ReduceRightPipe implements PipeTransform {
  transform = reduceRight
}
