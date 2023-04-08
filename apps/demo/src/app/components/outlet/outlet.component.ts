import { Component } from '@angular/core'

@Component({
  selector: 'outlet',
  template: '<router-outlet *ngIf="true"></router-outlet>'
})
export class OutletComponent  {}
