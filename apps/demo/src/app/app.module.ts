import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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

@NgModule({
  declarations: [AppComponent, ErrorComponent, OutletComponent, HomeComponent],
  imports: [BrowserModule, RouterModule, BrowserAnimationsModule, HttpClientModule, LayoutModule],
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
