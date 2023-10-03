
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import * as _ from 'lodash'
import { BehaviorSubject } from 'rxjs'


export class Cell {
  #checked = false
  get checked(): boolean {
    return this.#checked
  }
  set checked(value: boolean) {
    this.#checked = value
  }
  constructor(public x: number, public y: number) {}

  toJSON() {
    return `${this.x}x${this.y}`
  }
}

@Component({
  selector: 'tic-tac-toe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./tic-tac-toe.component.html`,
  styleUrls: [`./tic-tac-toe.component.scss`],
})
export class TicTacToeComponent implements OnInit {
  title = 'Tic Tac Toe'

  board$ = new BehaviorSubject<Cell[]>([])

  state$ = new BehaviorSubject({
    nextPlayer: 1, //1 is user, 2 is computer
    finished: false,
    winner: null,
  })
 
  generate(size: number = 3) {
    return _.chunk(Array(size * size).fill(0), size)
      .map((row, ir) => row.map((col, ic) => new Cell(ir, ic)))
      .flat()
  }

  ngOnInit() {

    this.board$.next(this.generate(3))


    // const matrix = [
    //   [0, 0, null],
    //   [0, 1, null],
    //   [0, 2, null],
    //   [1, 0, null],
    //   [1, 1, null],
    //   [1, 2, null],
    //   [2, 0, null],
    //   [2, 1, null],
    //   [2, 2, null],
    // ]
  }
}
