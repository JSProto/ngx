import { NgModule, PipeTransform, Type } from '@angular/core'

import { ClampPipe } from './clamp.pipe'
import { InRangePipe } from './inRange.pipe'

export const NUMBER_PIPES: Type<PipeTransform>[] = [InRangePipe, ClampPipe]

@NgModule({
  declarations: [...NUMBER_PIPES],
  exports: [...NUMBER_PIPES],
})
export class LodashNumberPipeModule {}
