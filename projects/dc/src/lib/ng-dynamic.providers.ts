import { InjectionToken, Provider } from '@angular/core'
import { NgDynamicManifest } from './ng-dynamic.model'

export const NG_DYNAMIC_MANIFEST_TOKEN = new InjectionToken<NgDynamicManifest[]>('ng-dynamic.manifest')

export function provideNgDynamic(manifest: NgDynamicManifest): Provider[] {
  return [
    {
      provide: NG_DYNAMIC_MANIFEST_TOKEN,
      multi: true,
      useValue: manifest,
    },
  ]
}
