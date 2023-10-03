import { NgModule, PipeTransform, Type } from '@angular/core'

import { CamelCasePipe } from './camelCase.pipe'
import { CapitalizePipe } from './capitalize.pipe'
import { DeburrPipe } from './deburr.pipe'
import { EndsWithPipe } from './endsWith.pipe'
import { EscapePipe } from './escape.pipe'
import { EscapeRegExpPipe } from './escapeRegExp.pipe'
import { KebabCasePipe } from './kebabCase.pipe'
import { LowerCasePipe } from './lowerCase.pipe'
import { LowerFirstPipe } from './lowerFirst.pipe'
import { PadPipe } from './pad.pipe'
import { PadEndPipe } from './padEnd.pipe'
import { PadStartPipe } from './padStart.pipe'
import { ReplacePipe } from './replace.pipe'
import { SnakeCasePipe } from './snakeCase.pipe'
import { SplitPipe } from './split.pipe'
import { StartCasePipe } from './startCase.pipe'
import { StartsWithPipe } from './startsWith.pipe'
import { ToLowerPipe } from './toLower.pipe'
import { ToUpperPipe } from './toUpper.pipe'
import { TrimPipe } from './trim.pipe'
import { TrimEndPipe } from './trimEnd.pipe'
import { TrimStartPipe } from './trimStart.pipe'
import { TruncatePipe } from './truncate.pipe'
import { UnescapePipe } from './unescape.pipe'
import { UpperCasePipe } from './upperCase.pipe'
import { UpperFirstPipe } from './upperFirst.pipe'
import { WordsPipe } from './words.pipe'

export const STRING_PIPES: Type<PipeTransform>[] = [
  CamelCasePipe,
  CapitalizePipe,
  DeburrPipe,
  EndsWithPipe,
  EscapePipe,
  EscapeRegExpPipe,
  KebabCasePipe,
  LowerCasePipe,
  LowerFirstPipe,
  PadPipe,
  PadEndPipe,
  PadStartPipe,
  ReplacePipe,
  SnakeCasePipe,
  SplitPipe,
  StartCasePipe,
  StartsWithPipe,
  ToLowerPipe,
  ToUpperPipe,
  TrimPipe,
  TrimEndPipe,
  TrimStartPipe,
  TruncatePipe,
  UnescapePipe,
  UpperCasePipe,
  UpperFirstPipe,
  WordsPipe,
]

@NgModule({
  declarations: [...STRING_PIPES],
  exports: [...STRING_PIPES],
})
export class LodashStringPipeModule {}
