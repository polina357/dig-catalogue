import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChaptersComponent } from './chapters.component';
import { SubchaptersComponent } from '../subchapters/subchapters.component';
import { ChapterResolve } from '../../services/resolvers/chapter.resolver';
 
const routes: Routes = [
  {
    path: '',
    component: ChaptersComponent,
    children: [
      {
        path: ':chapterId',
        redirectTo: ':chapterId/subchapters',
        pathMatch: 'full'
      },
      {
        path: ':chapterId/subchapters',
        loadChildren: 'app/components/subchapters/subchapters.module#SubchaptersModule',
        resolve: {
          chapter: ChapterResolve
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChaptersRoutingModule { }