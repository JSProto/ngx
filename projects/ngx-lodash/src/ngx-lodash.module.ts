import { NgModule } from '@angular/core'

import { LodashArrayPipeModule } from './array/lodash-array.module'
import { LodashCollectionPipeModule } from './collection/lodash-collection.module'
import { LodashFunctionPipeModule } from './function/lodash-function.module'
import { LodashLangPipeModule } from './lang/lodash-lang.module'
import { LodashNumberPipeModule } from './number/lodash-number.module'
import { LodashObjectPipeModule } from './object/lodash-object.module'
import { LodashStringPipeModule } from './string/lodash-string.module'

@NgModule({
  imports: [
    LodashArrayPipeModule,
    LodashCollectionPipeModule,
    LodashObjectPipeModule,
    LodashFunctionPipeModule,
    LodashLangPipeModule,
    LodashNumberPipeModule,
    LodashStringPipeModule,
  ],
  exports: [
    LodashArrayPipeModule,
    LodashCollectionPipeModule,
    LodashObjectPipeModule,
    LodashFunctionPipeModule,
    LodashLangPipeModule,
    LodashNumberPipeModule,
    LodashStringPipeModule,
  ],
})
export class NgxLodashModule {}
