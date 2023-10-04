import { Pipe, PipeTransform } from '@angular/core'

import { DynamicComponentService } from './dynamic-component.service'

@Pipe({
  name: 'hasDc',
})
export class HasDynamicComponentPipe implements PipeTransform {
  constructor(private readonly dynamicComponentService: DynamicComponentService) {}

  public transform(componentId?: string | null): boolean {
    return this.dynamicComponentService.has(componentId)
  }
}
