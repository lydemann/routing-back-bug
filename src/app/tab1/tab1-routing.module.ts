import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedTabComponent } from './nested-tab/nested-tab.component';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: Tab1Page,
        children: [
          {
            path: 'nested',
            component: NestedTabComponent,
          },
        ]
      },
      {
        path: 'details/:transactionId',
        loadChildren: () =>
          import('./details/details.module').then(
            (m) => m.DetailsModule
          ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
