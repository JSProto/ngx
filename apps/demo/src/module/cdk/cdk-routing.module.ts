import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { OutletComponent } from '../../app/components/outlet/outlet.component'
import { Route } from '../../app/core/route'

import { TableComponent } from './components/table/table.component'

const components: Route = {
  path: 'components',
  title: 'Components',
  data: { icon: 'grid_view' },
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'table' },
    {
      path: 'table',
      title: 'Table',
      data: { icon: 'text_fields' },
      component: TableComponent,
    },
  ],
}

const route: Route = {
  path: '',
  title: 'CDK',
  data: { icon: 'settings' },
  component: OutletComponent,
  children: [{ path: '', pathMatch: 'full', redirectTo: 'components' }, components],
}

@NgModule({
  imports: [RouterModule.forChild([route])],
  exports: [RouterModule],
})
export class CdkRoutingModule {}
