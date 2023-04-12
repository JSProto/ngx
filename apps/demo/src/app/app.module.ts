import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormlyModule } from '@ngx-formly/core'
import { FormlyMaterialModule } from '@ngx-formly/material'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './components/app/app.component'
import { ErrorComponent } from './components/error/error.component'
import { HomeComponent } from './components/home/home.component'
import { OutletComponent } from './components/outlet/outlet.component'
import { LayoutModule } from './core/layout/layout.module'

@NgModule({
  declarations: [AppComponent, ErrorComponent, OutletComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FormlyMaterialModule,
    FormlyModule.forRoot(),

    AppRoutingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
