import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { ChapterDetailComponent } from './components/chapters/chapter-detail/chapter-detail.component';
import { ChapterListComponent } from './components/chapters/chapter-list/chapter-list.component';
import { ChapterResolve } from './services/resolvers/chapter.resolver';
import { SubchaptersComponent } from './components/subchapters/subchapters.component';
import { SubchapterResolve } from './services/resolvers/subchapter.resolver';
import { SubchapterDetailComponent } from './components/subchapters/subchapter-detail/subchapter-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/chapters',
    pathMatch: 'full'
  },
  {
    path: 'chapters',
    component: ChaptersComponent,
    children: [
      {
        path: ':chapterId',
        resolve: {
          chapter: ChapterResolve
        },
        component: ChapterDetailComponent
      }
    ]
  },
  {
    path: 'subchapters',
    component: SubchaptersComponent,
    children: [
      {
        path: ':subchapterId',
        resolve: {
          subchapter: SubchapterResolve
        },
        component: SubchapterDetailComponent
      }
    ]
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}