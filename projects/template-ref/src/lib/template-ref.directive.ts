import { Directive, Input, OnDestroy, OnInit, TemplateRef, inject } from '@angular/core'

import { TemplateRegistry } from './template-ref-registry'

@Directive({
  selector: '[ngxTemplateRef]',
  standalone: true,
})
export class TemplateRefDirective implements OnInit, OnDestroy {
  private readonly registry = inject(TemplateRegistry)
  private readonly template = inject(TemplateRef)

  @Input('ngxTemplateRef') name!: string

  ngOnInit(): void {
    this.registry.set(this.name, this.template)
  }

  ngOnDestroy(): void {
    this.registry.delete(this.name)
  }
}
