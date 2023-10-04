import { InjectionToken, Provider } from '@angular/core'
import { DynamicComponentManifest } from './dynamic-component.model'

export const DYNAMIC_COMPONENT_MANIFEST_TOKEN = new InjectionToken<DynamicComponentManifest[]>(
  'dynamic.component.manifest',
)

export function provideDynamicComponent(manifest: DynamicComponentManifest): Provider[] {
  return [
    {
      provide: DYNAMIC_COMPONENT_MANIFEST_TOKEN,
      multi: true,
      useValue: manifest,
    },
  ]
}
