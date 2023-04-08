import { Data as NgData, Route as NgRoute } from '@angular/router'

export interface Data extends NgData {
  navigation?: boolean
  disable?: boolean
  icon?: string
  // [PackageRoot]?: string
}

export interface Route extends NgRoute {
  data?: Data
  children?: Routes
}
export type Routes = Route[]
