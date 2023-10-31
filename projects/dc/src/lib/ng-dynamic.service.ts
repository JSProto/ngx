import { Injectable, Injector, Type, inject } from '@angular/core'

import { NgDynamicManifest } from './ng-dynamic.model'
import { NG_DYNAMIC_MANIFEST_TOKEN } from './ng-dynamic.providers'

@Injectable()
export class NgDynamicService {
  private readonly manifests = inject(Injector)
    .get<NgDynamicManifest[]>(NG_DYNAMIC_MANIFEST_TOKEN, [])
    .reduce((map, manifest) => map.set(manifest.id, manifest), new Map<string, NgDynamicManifest>())

  getComponent<T = unknown>(manifestId: string | undefined | null): Type<T> | undefined {
    return this.manifests.get(manifestId!)?.component as Type<T>
  }

  has(manifestId: string | undefined | null) {
    return manifestId ? this.manifests.has(manifestId) : false
  }
}
