import { ChangeDetectionStrategy, Component, Inject, ViewChild, ViewEncapsulation } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'

import { InjectType } from '../inject-type'
import { NAVIGATION_TOKEN } from '../navigation/navigation'

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  @ViewChild(MatSidenav, { static: true }) sidenav!: MatSidenav

  constructor(@Inject(NAVIGATION_TOKEN) public navigation$: InjectType<typeof NAVIGATION_TOKEN>) {}
}
