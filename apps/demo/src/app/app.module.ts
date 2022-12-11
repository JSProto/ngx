import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LodashPipeModule } from '@this/ngx-lodash'

import { AppComponent } from './app.component'
import { NxWelcomeComponent } from './nx-welcome.component'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, LodashPipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
