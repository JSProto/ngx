import { NgModule, Type, Pipe, PipeTransform } from '@angular/core'
import * as _ from 'lodash'

import { ConditionalPick } from 'type-fest'

type LoDash = ConditionalPick<typeof _, Function>

// const factory = <T extends keyof LoDash>(name: 'capitalize' = 'capitalize') => {
//   @Pipe({
//     name: '_' + name,
//   })
//   class P implements PipeTransform {
//     transform = _[name]
//   }

//   return P
// }

// export const capitalize = factory('capitalize')

const name = 'get'
@Pipe({
  name: `_${name}`,
})
export class GetPipe implements PipeTransform {
  transform = _[name]
}

export const LODASH_PIPES: Type<PipeTransform>[] = [GetPipe]

@NgModule({
  declarations: [...LODASH_PIPES],
  exports: [...LODASH_PIPES],
})
export class LodashPipeModule {}
