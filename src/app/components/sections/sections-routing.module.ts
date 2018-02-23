import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionsComponent } from './sections.component';
import { SectionResolve } from '../../services/resolvers/section.resolver';

const routes: Routes = [
  {
    path: '',
    component: SectionsComponent,
    children: [
      {
        path: ':sectionId',
        redirectTo: ':sectionId/ranges',
        pathMatch: 'full'
      },
      {
        path: ':sectionId/ranges',
        loadChildren: 'app/components/ranges/ranges.module#RangesModule',
        resolve: {
          section: SectionResolve
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SectionsRoutingModule { }