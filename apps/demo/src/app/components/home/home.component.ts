import { ChangeDetectionStrategy, Component, EventEmitter, OnInit } from '@angular/core'
import { DynamicComponent } from '../../dynamic/dynamic.component'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  data = { id: 5 }
  
  ngOnInit(): void {
    this.dynamic.outputs.send.subscribe(value => {
      console.log('value', value)
    })
  }

  testSend(data: any) {
    console.log('data', data)
  }
  
  update() {
    this.data = { id: Math.random() }

    console.log(this.data)
  }

  dynamic = {
    component: DynamicComponent,
    inputs: {
      url: 'https://angular.io/assets/images/logos/angular/angular.png',
      // updated: (changes: any) => console.log('Image changes', changes),
    },
    outputs: {
      send: new EventEmitter<string>(),
    },
  }
}
