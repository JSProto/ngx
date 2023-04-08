import { NgForOf } from '@angular/common'
import { Directive, DoCheck, Host, Input } from '@angular/core'
import _, { PropertyName } from 'lodash'

@Directive({ selector: '[ngForTrackByKey]' })
export class NgForTrackByKeyDirective<T> extends NgForOf<T> implements DoCheck {
  @Input() set ngForTrackByKey(key: keyof T | PropertyName | PropertyName[]) {
    if (key) {
      this.ngForRef.ngForTrackBy = (index, item) => _.get(item, key)
    }
  }

  constructor(@Host() private ngForRef: NgForOf<T>) {
    super({} as any, {} as any, {} as any)
  }

  override ngDoCheck() {
    return
  }
}
