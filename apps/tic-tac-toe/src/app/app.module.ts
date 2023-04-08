import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgxLodashModule } from '@this/ngx-lodash'

import { AppComponent } from './app.component'
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component'

@NgModule({
  declarations: [AppComponent, TicTacToeComponent],
  imports: [BrowserModule, CommonModule, NgxLodashModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
