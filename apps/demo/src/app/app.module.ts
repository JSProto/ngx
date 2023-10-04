import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DynamicDirective, provideDynamicComponent } from '@jsproto/ngx-dc'

import { CommonModule } from '@angular/common'
import {
  PreloadAllModules,
  RouterModule,
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withPreloading,
  withRouterConfig,
} from '@angular/router'
import { routes } from './app.routes'
import { AppComponent } from './components/app/app.component'
import { ErrorComponent } from './components/error/error.component'
import { HomeComponent } from './components/home/home.component'
import { OutletComponent } from './components/outlet/outlet.component'
import { LayoutModule } from './core/layout/layout.module'
import { PluginViewComponent } from './plugin-view/plugin-view.component'
import { TestidAdapterDirective } from './plugin-view/testid.directive'

@NgModule({
  declarations: [AppComponent, ErrorComponent, OutletComponent, HomeComponent, PluginViewComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    DynamicDirective,
    TestidAdapterDirective
  ],
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation(),
      withPreloading(PreloadAllModules),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
        onSameUrlNavigation: 'reload',
      }),
    ),
    provideDynamicComponent({
      id: 'testid',
      component: PluginViewComponent,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
