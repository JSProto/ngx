import { AfterViewInit, Directive, Input, OnDestroy, Type, ViewContainerRef } from '@angular/core'

import { DynamicComponentRegister } from './dynamic-component.register'
import { DynamicComponentService } from './dynamic-component.service'

@Directive({
  selector: '[dc]',
  standalone: true,
  providers: [DynamicComponentRegister, DynamicComponentService],
})
export class DynamicDirective<T> implements AfterViewInit, OnDestroy {
  private component?: Type<T> | null

  private _initialized = false

  private _manifestId?: string | null

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly register: DynamicComponentRegister,
    private readonly service: DynamicComponentService,
  ) {}

  @Input() set inject(manifestId: string | null | undefined) {
    this._manifestId = manifestId

    if (this._initialized) {
      this.setComponent(manifestId)
    }
  }

  ngAfterViewInit(): void {
    this._initialized = true

    if (this._manifestId) {
      this.setComponent(this._manifestId)
    }
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnDestroy(): void {}

  setComponent(manifestId: string | null | undefined) {
    this.component = this.service.getComponent<T>(manifestId)
    if (this.component) {
      this.loadComponent(this.component)
    }
  }

  loadComponent(component: Type<T>): void {
    if (this.viewContainerRef) {
      this.viewContainerRef.clear()

      if (component) {
        const componentRef = this.viewContainerRef.createComponent(component)


        this.register.registerComponentRef(component, componentRef)

        // if (this.componentClass) {
        //   this.renderer2.addClass(this.componentRef.location.nativeElement, this.componentClass)
        // }

        componentRef.changeDetectorRef.detectChanges()
      }
    }
  }
}
