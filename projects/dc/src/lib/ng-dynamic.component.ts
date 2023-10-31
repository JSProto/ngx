import 'reflect-metadata'

import { AsyncPipe, JsonPipe, NgIf } from '@angular/common'
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentMirror,
  Directive,
  EventEmitter,
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
import { BehaviorSubject, map, of, switchMap, takeWhile } from 'rxjs'
import { NgComponentInlet } from './ng-component-inlet.directive'
import { reflectDirectiveType } from './ng-dynamic.model'
import { NgDynamicService } from './ng-dynamic.service'

@Directive()
export class NgDynamicDirective implements OnChanges {
  readonly #changes = new EventEmitter<SimpleChanges>()
  readonly onChanges = this.#changes.asObservable()

  ngOnChanges(changes: SimpleChanges) {
    this.#changes.next(changes)
  }
}

@Component({
  selector: 'ng-dynamic',
  templateUrl: './ng-dynamic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [NgDynamicService],
  imports: [NgComponentInlet, NgIf, AsyncPipe, JsonPipe],
})
export class NgDynamicComponent implements OnInit, AfterViewInit {
  private readonly vcr = inject(ViewContainerRef)
  private readonly cdr = inject(ChangeDetectorRef)
  private readonly service = inject(NgDynamicService)
  private readonly directive = inject(NgDynamicDirective, { host: true, optional: true })

  public component = new BehaviorSubject<Type<any>>(null!)
  public component$ = this.component.asObservable()

  private mirror?: ComponentMirror<any> | null

  private _initialized = false

  private _manifestId?: string | null

  private get _isReady() {
    return !!(this.directive && this.mirror)
  }

  public inputs$ = of(null).pipe(
    takeWhile(() => this._isReady),
    switchMap(() => this.directive!.onChanges),
    map((changes) => {
      const props = this.mirror?.inputs.map(({ propName }) => propName) || []
      return props.reduce((m, prop) => ({ ...m, [prop]: changes[prop]?.currentValue }), {})
    }),
  )

  public outputs$ = of(null).pipe(
    takeWhile(() => this._isReady),
    map(() => {
      const props = this.mirror?.outputs.map(({ propName }) => propName) || []
      return props.reduce((m, prop) => ({ ...m, [prop]: (this.directive as any)![prop] }), {})
    }),
  )

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
      this.inject = meta?.selectors?.[0][1]
    }
  }

  ngAfterViewInit(): void {
    this._initialized = true

    if (this._manifestId) {
      this.setComponent(this._manifestId)
    }
  }

  setComponent(manifestId: string | null | undefined) {
    const component = this.service.getComponent(manifestId)
    if (component) {
      this.mirror = reflectComponentType(component!)
      this.component.next(component)

      if (this.contentTemplateRef) {
        this.rootNodes = [this.vcr.createEmbeddedView(this.contentTemplateRef).rootNodes]
      }

      this.cdr.detectChanges()
    }
  }
}
