import { inject, InjectionToken } from '@angular/core'
import { Route, RouteConfigLoadEnd, Router, Routes } from '@angular/router'
import _ from 'lodash'
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, map } from 'rxjs'

export type NavigationItem = Pick<Route, 'path' | 'outlet'> & {
  id: string
  title: string
  parent: NavigationItem
  data?: {
    [key: string]: any
    roles?: string[]
  }
  children: NavigationItem[]
}

const mount = new BehaviorSubject(new Map<string, string>())

export const PackageRoot = Symbol('package')

export const packageRoute$ = (packageName: string) =>
  mount.pipe(
    map((mapper) => mapper.get(packageName) || ''),
    distinctUntilChanged(),
  )

const tree = (routes: Routes, path: string = ''): NavigationItem[] => {
  return routes
    .filter((route) => !route.path?.includes(':') && !route.path?.includes('*') && !route.redirectTo)
    .filter((route) => _.get(route.data, 'navigation') !== false)
    .map((route) => {
      const navigation = _.pick(route, 'path', 'title', 'data', 'outlet', 'children') as NavigationItem
      const children = Object.values(_.pick(route, 'children', '_loadedRoutes')).flat() as Routes

      navigation.id = _.uniqueId('navigation_')
      navigation.path = navigation.path ? [path, navigation.path].join('/') : ''
      navigation.children = tree(children, navigation.path || path)
      navigation.children.every((c) => (c.parent = navigation))

      const packageName = _.get(navigation.data, PackageRoot) as string
      if (packageName) {
        mount.value.set(packageName, path)
        mount.next(mount.value)
      }
      return !navigation.title ? navigation.children : navigation
    })
    .flat()
}

export const NAVIGATION_TOKEN = new InjectionToken('navigation.token', {
  providedIn: 'root',
  factory() {
    const router = inject(Router)
    const navigation = new BehaviorSubject<NavigationItem[]>([])

    router.events
      .pipe(
        filter((event) => event instanceof RouteConfigLoadEnd),
        debounceTime(50),
        map(() => tree(router.config)),
      )
      .subscribe((routes) => navigation.next(routes))

    return navigation.asObservable()
  },
})
