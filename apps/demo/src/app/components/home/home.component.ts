import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  url = 'test'

  data = { id: 5 }

  testSend(data: any) {
    console.log('data', data)
  }

  update() {
    this.data = { id: Math.random() }

    console.log(this.data)
  }
}
