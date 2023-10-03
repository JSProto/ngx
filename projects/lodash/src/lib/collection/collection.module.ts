import { NgModule, PipeTransform, Type } from '@angular/core'

import { FilterPipe } from './filter.pipe'
import { FindPipe } from './find.pipe'
import { GroupByPipe } from './groupBy.pipe'
import { IncludesPipe } from './includes.pipe'
import { MapPipe } from './map.pipe'
import { OrderByPipe } from './orderBy.pipe'
import { RejectPipe } from './reject.pipe'
import { SizePipe } from './size.pipe'
import { SomePipe } from './some.pipe'
import { SortByPipe } from './sortBy.pipe'

export const COLLECTION_PIPES: Type<PipeTransform>[] = [
  FilterPipe,
  FindPipe,
  IncludesPipe,
  MapPipe,
  OrderByPipe,
  RejectPipe,
  SizePipe,
  SomePipe,
  SortByPipe,
  GroupByPipe,
]

@NgModule({
  declarations: [...COLLECTION_PIPES],
  exports: [...COLLECTION_PIPES],
})
export class LodashCollectionPipeModule {}
