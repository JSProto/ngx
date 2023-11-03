import { Pipe, PipeTransform, inject } from '@angular/core'

import { TemplateRegistry } from './template-ref-registry'

@Pipe({
  name: 'templateRef',
  standalone: true,
})
export class TemplateRefPipe implements PipeTransform {
  private readonly registry = inject(TemplateRegistry)

  transform(name: string) {
    return this.registry.get(name)
  }
}
