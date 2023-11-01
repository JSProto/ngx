import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Routes } from '@angular/router'
// ..
import { inject } from '@angular/core'
import { NgDynamicService } from '@jsproto/ngx-dc'
import { ErrorComponent } from './components/error/error.component'
import { HomeComponent } from './components/home/home.component'
import { LayoutComponent } from './core/layout/layout.component'

const canActivateRoute: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const component = inject(NgDynamicService).getComponent('plugin.component.test')

  if (component) {
    route.component = component!
  }

  return !!component // access if exists plugin
  return true // access if not exists plugin but need load default route.component
}

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        // http://localhost:4200/home?debug=123&url=123
        path: '',
        component: HomeComponent,
      },
      {
        // http://localhost:4200/home/plugin?debug=123&url=123
        path: 'plugin',
        canActivate: [canActivateRoute],
        component: ErrorComponent, // loaded plugin.component.test. not ErrorComponent
      },
    ],
  },

  {
    path: '404',
    component: ErrorComponent,
  },
  { path: '**', redirectTo: '404' },
]
