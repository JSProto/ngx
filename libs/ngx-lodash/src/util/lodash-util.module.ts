import { NgModule, PipeTransform, Type } from '@angular/core'
 
export const UTIL_PIPES: Type<PipeTransform>[] = [ ]

@NgModule({
  declarations: [...UTIL_PIPES],
  exports: [...UTIL_PIPES],
})
export class LodashUtilPipeModule {}
