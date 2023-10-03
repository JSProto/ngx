import { NgModule, PipeTransform, Type } from '@angular/core'

import { AssignPipe } from './assign.pipe'
import { EntriesPipe } from './entries.pipe'
import { FindKeyPipe } from './findKey.pipe'
import { GetPipe } from './get.pipe'
import { HasPipe } from './has.pipe'
import { InvertPipe } from './invert.pipe'
import { KeysPipe } from './keys.pipe'
import { OmitPipe } from './omit.pipe'
import { PickPipe } from './pick.pipe'
import { PickByPipe } from './pickBy.pipe'
import { ValuesPipe } from './values.pipe'

export const OBJECT_PIPES: Type<PipeTransform>[] = [
  GetPipe,
  HasPipe,
  InvertPipe,
  OmitPipe,
  PickPipe,
  PickByPipe,
  AssignPipe,
  KeysPipe,
  ValuesPipe,
  EntriesPipe,
  FindKeyPipe
]

@NgModule({
  declarations: [...OBJECT_PIPES],
  exports: [...OBJECT_PIPES],
})
export class LodashObjectPipeModule {}
