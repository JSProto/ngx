import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { ErrorComponent } from './components/error/error.component'
import { HomeComponent } from './components/home/home.component'
import { LayoutComponent } from './core/layout/layout.component'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'cdk',
        loadChildren: async () => (await import('../module/cdk/cdk.module')).CdkModule,
      },
    ],
  },

  {
    path: '404',
    component: ErrorComponent,
  },
  { path: '**', redirectTo: '404' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
