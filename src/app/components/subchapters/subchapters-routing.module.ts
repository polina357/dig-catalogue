import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubchaptersComponent } from './subchapters.component';
import { SubchapterResolve } from '../../services/resolvers/subchapter.resolver';

const routes: Routes = [
  {
    path: '',
    component: SubchaptersComponent,
    children: [
      {
        path: ':subchapterId',
        redirectTo: ':subchapterId/sections',
        pathMatch: 'full'
      },
      {
        path: ':subchapterId/sections',
        loadChildren: 'app/components/sections/sections.module#SectionsModule',
        resolve: {
          subchapter: SubchapterResolve
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SubchaptersRoutingModule { }