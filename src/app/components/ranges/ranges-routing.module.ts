import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangesComponent } from './ranges.component';
import { RangeResolve } from '../../services/resolvers/range.resolver';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {
    path: '',
    component: RangesComponent,
    children: [
      {
        path: ':rangeId',
        redirectTo: ':rangeId/items',
        pathMatch: 'full'
      },
      {
        path: ':rangeId/items',
        resolve: {
          range: RangeResolve
        },
        component: ItemListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RangesRoutingModule { }