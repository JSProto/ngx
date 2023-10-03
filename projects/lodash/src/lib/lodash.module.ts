import { NgModule } from '@angular/core'

import { LodashArrayPipeModule } from './array/array.module'
import { LodashCollectionPipeModule } from './collection/collection.module'
import { LodashFunctionPipeModule } from './function/function.module'
import { LodashLangPipeModule } from './lang/lang.module'
import { LodashNumberPipeModule } from './number/number.module'
import { LodashObjectPipeModule } from './object/object.module'
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
export class NgxLodashPipeModule {}
