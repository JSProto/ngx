import 'reflect-metadata'

import { AsyncPipe, JsonPipe, NgIf } from '@angular/common'
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentMirror,
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  inject,
  reflectComponentType,
} from '@angular/core'
import { BehaviorSubject, filter } from 'rxjs'
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
  imports: [NgComponentInlet, NgIf, AsyncPipe, JsonPipe],
})
export class NgDynamicComponent implements OnInit, OnChanges, AfterViewInit {
  private readonly vcr = inject(ViewContainerRef)
  private readonly cdr = inject(ChangeDetectorRef)
  private readonly service = inject(NgDynamicService)
  private readonly directive = inject(NgDynamicDirective, { host: true, optional: true })

  public component = new BehaviorSubject<Type<any>>(null!)
  public component$ = this.component.asObservable().pipe(filter((a) => !!a))

  private mirror?: ComponentMirror<any> | null

  private _initialized = false

  private _manifestId?: string | null

  public inputs: any
  public outputs: any

  @ViewChild('contentTemplate') contentTemplateRef!: TemplateRef<any>
  public rootNodes?: any[][]

  @Input() set inject(manifestId: string | null | undefined) {
    this._manifestId = manifestId

    if (this._initialized) {
      this.setComponent(this._manifestId)
    }
  }

  ngOnInit(): void {
    if (this.directive) {
      const meta = reflectDirectiveType(this.directive.constructor as Type<unknown>)
      const selector = meta?.selectors?.[0][1]
      this.inject = selector
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.mirror, 'this.mirror?.inputs')
    console.log(this.inputs, this.outputs)

    this.setIO()
  }

  ngAfterViewInit(): void {
    this._initialized = true

    if (this._manifestId) {
      this.setComponent(this._manifestId)
    }
  }

  setIO() {
    this.inputs = this.mirror?.inputs.reduce((m, { propName }) => {
      return { ...m, [propName]: (this.directive as any)[propName] }
    }, {} as Record<string, any>)

    this.outputs = this.mirror?.outputs.reduce((m, { propName }) => {
      return { ...m, [propName]: (this.directive as any)[propName] }
    }, {} as Record<string, any>)

    this.cdr.detectChanges()
  }

  setComponent(manifestId: string | null | undefined) {
    const component = this.service.getComponent(manifestId)
    if (component) {
      this.mirror = reflectComponentType(component!)
      this.component.next(component)

      this.setIO()

      if (this.contentTemplateRef) {
        this.rootNodes = [this.vcr.createEmbeddedView(this.contentTemplateRef).rootNodes]
      }
    }

    this.cdr.detectChanges()
  }
}
