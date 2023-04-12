import { NgModule, PipeTransform, Type } from '@angular/core'
 
export const MATH_PIPES: Type<PipeTransform>[] = [ ]

@NgModule({
  declarations: [...MATH_PIPES],
  exports: [...MATH_PIPES],
})
export class LodashMathPipeModule {}
