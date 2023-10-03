import { Component } from '@angular/core'
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component'

@Component({
  selector: 'ngx-root',
  imports: [TicTacToeComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tic Tac Toe'
}
