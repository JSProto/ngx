import { NgModule, PipeTransform, Type } from '@angular/core'

import { IsEmptyPipe } from './isEmpty.pipe'

export const LANG_PIPES: Type<PipeTransform>[] = [IsEmptyPipe]

@NgModule({
  declarations: [...LANG_PIPES],
  exports: [...LANG_PIPES],
})
export class LodashLangPipeModule {}
