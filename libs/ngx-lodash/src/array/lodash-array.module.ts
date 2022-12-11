import { NgModule, PipeTransform, Type } from '@angular/core'

import { ConcatPipe } from './concat.pipe'
import { DifferencePipe } from './difference.pipe'
import { FirstPipe } from './first.pipe'
import { IntersectionPipe } from './intersection.pipe'
import { JoinPipe } from './join.pipe'
import { LastPipe } from './last.pipe'
import { NthPipe } from './nth.pipe'
import { TailPipe } from './tail.pipe'
import { TakePipe } from './take.pipe'
import { UniqPipe } from './uniq.pipe'
import { UniqByPipe } from './uniqBy.pipe'
import { WithoutPipe } from './without.pipe'

export const ARRAY_PIPES: Type<PipeTransform>[] = [
  WithoutPipe,
  DifferencePipe,
  IntersectionPipe,
  NthPipe,
  TailPipe,
  TakePipe,
  UniqByPipe,
  UniqPipe,
  FirstPipe,
  LastPipe,
  ConcatPipe,
  JoinPipe
]

@NgModule({
  declarations: [...ARRAY_PIPES],
  exports: [...ARRAY_PIPES],
})
export class LodashArrayPipeModule {}
