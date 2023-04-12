import { NgModule, PipeTransform, Type } from '@angular/core'

import { NegatePipe } from './negate.pipe'

export const FUNCTION_PIPES: Type<PipeTransform>[] = [NegatePipe]

@NgModule({
  declarations: [...FUNCTION_PIPES],
  exports: [...FUNCTION_PIPES],
})
export class LodashFunctionPipeModule {}
