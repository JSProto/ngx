import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, SimpleChanges, inject } from '@angular/core'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnChanges {
  cdr = inject(ChangeDetectorRef)

  data = { id: 5 }

  ngOnChanges(changes: SimpleChanges): void {
     this.cdr.markForCheck()
  }

  testSend(data: any) {
    console.log('data', data)
  }

  update() {
    this.data = { id: Math.random() }

    console.log(this.data)
  }
}
