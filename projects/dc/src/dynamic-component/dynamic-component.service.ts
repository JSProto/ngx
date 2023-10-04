import { Injectable, Injector, Type, inject } from '@angular/core'

import { DynamicComponentManifest } from './dynamic-component.model'
import { DYNAMIC_COMPONENT_MANIFEST_TOKEN } from './dynamic-component.providers'

@Injectable()
export class DynamicComponentService {
  private readonly manifests = inject(Injector)
    .get<DynamicComponentManifest[]>(DYNAMIC_COMPONENT_MANIFEST_TOKEN, [])
    .reduce((map, manifest) => map.set(manifest.id, manifest), new Map<string, DynamicComponentManifest>())

  getComponent<T = unknown>(manifestId: string | undefined | null): Type<T> | undefined {
    return this.manifests.get(manifestId!)?.component as Type<T>
  }

  has(manifestId: string | undefined | null) {
    return manifestId ? this.manifests.has(manifestId) : false
  }
}
