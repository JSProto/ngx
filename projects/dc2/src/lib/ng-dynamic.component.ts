import 'reflect-metadata'

import { NgIf } from '@angular/common'
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentMirror,
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Type,
  ViewContainerRef,
  inject,
  reflectComponentType,
} from '@angular/core'
import { NgComponentInlet } from './ng-component-inlet.directive'
import { reflectDirectiveType } from './ng-dynamic.model'
import { NgDynamicService } from './ng-dynamic.service'

@Directive()
export class NgDynamicDirective {}

@Component({
  selector: 'ng-dynamic',
  templateUrl: './ng-dynamic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [NgDynamicService], // , forwardRef(() => NgDynamicDirective)
  imports: [NgComponentInlet, NgIf],
})
export class NgDynamicComponent implements OnInit, OnChanges, AfterViewInit {
  private readonly viewContainerRef = inject(ViewContainerRef)
  private readonly service = inject(NgDynamicService)
  private readonly directive = inject(NgDynamicDirective, { host: true, optional: true })

  public component?: Type<any> | null
  private mirror?: ComponentMirror<any> | null

  private _initialized = false

  private _manifestId?: string | null

  public inputs: any
  public outputs: any

  ngOnInit(): void {
    if (this.directive) {
      const meta = reflectDirectiveType(this.directive.constructor as Type<unknown>)
      const selector = meta?.selectors?.[0][1]
      this.inject = selector
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes, this.mirror)

    this.mirror?.inputs.forEach(({ propName }) => {
      // @ts-ignore
      this.inputs[propName] = this[propName]
    })
    this.mirror?.outputs.forEach(({ propName }) => {
      // @ts-ignore
      this.outputs[propName] = this[propName]
    })
  }

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

  setComponent(manifestId: string | null | undefined) {
    this.component = this.service.getComponent(manifestId)
    if (this.component) {
      this.mirror = reflectComponentType(this.component!)

      this.loadComponent(this.component)
    }
  }

  loadComponent(component: Type<unknown>): void {
    if (this.viewContainerRef) {
      this.viewContainerRef.clear()

      if (component) {
        const componentRef = this.viewContainerRef.createComponent(component)

        componentRef.changeDetectorRef.detectChanges()
      }
    }
  }
}
