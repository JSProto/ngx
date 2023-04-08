import { InjectionToken } from '@angular/core'

export type InjectType<T> = T extends InjectionToken<infer R> ? R : unknown
