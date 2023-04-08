import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { NavigationItem } from './navigation'

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit {
  private readonly localStorageToggleKay = 'MainMenuToggleState'
  isExpanded = false
  context!: { route: NavigationItem }

  @Input() menu!: NavigationItem[]

  constructor(public router: Router) {}

  private initToggleState() {
    const state = localStorage.getItem(this.localStorageToggleKay)

    this.isExpanded = JSON.parse(state as string) as boolean
  }

  ngOnInit() {
    this.initToggleState()
  }

  onToggle() {
    this.isExpanded = !this.isExpanded

    localStorage.setItem(this.localStorageToggleKay, JSON.stringify(this.isExpanded))
  }
}
