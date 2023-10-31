import { Type } from '@angular/core'

export interface NgDynamicManifest {
  id: string
  data?: Record<string, any>
  component: Type<unknown>
}

export class NgDynamicRouteData<T extends object = any> {
  constructor(public manifestId: string, public config: T) {}
}

declare interface DirectiveDefinition<T> {
  type: Type<T>

  selectors?: string[][]
  inputs?: {
    [P in keyof T]?: string
  }

  outputs?: {
    [P in keyof T]?: string
  }

  hostBindings?: any
  hostVars?: number
  hostAttrs?: string[]

  exportAs?: string[]
  standalone?: boolean
  signals?: boolean
}

export function reflectDirectiveType<C>(ctor: Type<C>): DirectiveDefinition<C> | null {
  return Object.values(ctor).find((props: { type: Type<C> }) => props?.type === ctor)
}
