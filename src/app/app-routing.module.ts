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
import { SectionsComponent } from './components/sections/sections.component';
import { SectionResolve } from './services/resolvers/section.resolver';
import { SectionDetailComponent } from './components/sections/section-detail/section-detail.component';
import { RangesComponent } from './components/ranges/ranges.component';
import { RangeResolve } from './services/resolvers/range.resolver';
import { RangeDetailComponent } from './components/ranges/range-detail/range-detail.component';

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
         // chapter: ChapterResolve,
          subchapter: SubchapterResolve
        },
        component: SubchapterDetailComponent
      }
    ]
  },
  {
    path: 'sections',
    component: SectionsComponent,
    children: [
      {
        path: ':sectionId',
        resolve: {
          section: SectionResolve
        },
        component: SectionDetailComponent
      }
    ]
  },
  {
    path: 'ranges',
    component: RangesComponent,
    children: [
      {
        path: ':rangeId',
        resolve: {
          range: RangeResolve
        },
        component: RangeDetailComponent
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