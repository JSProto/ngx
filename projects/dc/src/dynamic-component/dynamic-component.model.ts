import { Type } from '@angular/core'

export interface DynamicComponentManifest {
  id: string
  label: string
  data?: Record<string, any>
  component: Type<unknown>
}

export class DynamicComponentRouteData<T extends object = any> {
  constructor(public componentId: string, public config: T) {}
}

export interface DynamicComponentOutputs<T = any, D = any> {
  propName: T
  data?: D
}

