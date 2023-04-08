import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ErrorComponent implements OnInit {
  constructor(private readonly title: Title) {}

  ngOnInit() {
    this.title.setTitle('Error')
  }
}
