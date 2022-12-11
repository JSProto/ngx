import { NgModule } from '@angular/core'

import { LodashArrayPipeModule } from './array/lodash-array.module'
import { LodashCollectionPipeModule } from './collection/lodash-collection.module'
import { LodashFunctionPipeModule } from './function/lodash-function.module'
import { LodashLangPipeModule } from './lang/lodash-lang.module'
import { LodashNumberPipeModule } from './number/lodash-number.module'
import { LodashObjectPipeModule } from './object/lodash-object.module'

@NgModule({
  imports: [
    LodashArrayPipeModule,
    LodashCollectionPipeModule,
    LodashObjectPipeModule,
    LodashFunctionPipeModule,
    LodashLangPipeModule,
    LodashNumberPipeModule,
  ],
  exports: [
    LodashArrayPipeModule,
    LodashCollectionPipeModule,
    LodashObjectPipeModule,
    LodashFunctionPipeModule,
    LodashLangPipeModule,
    LodashNumberPipeModule,
  ],
})
export class LodashPipeModule {}
