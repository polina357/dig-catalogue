import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ChaptersComponent } from './components/chapters/chapters.component';
import { ChapterDetailComponent } from './components/chapters/chapter-detail/chapter-detail.component';
import { ChapterListComponent } from './components/chapters/chapter-list/chapter-list.component';
import { ChapterResolve, ChaptersResolve } from './services/resolvers/chapter.resolver';
import { SubchaptersComponent } from './components/subchapters/subchapters.component';
import { SubchapterResolve, SubchaptersResolve } from './services/resolvers/subchapter.resolver';
import { SubchapterDetailComponent } from './components/subchapters/subchapter-detail/subchapter-detail.component';
import { SectionsComponent } from './components/sections/sections.component';
import { SectionResolve, SectionsResolve } from './services/resolvers/section.resolver';
import { SectionDetailComponent } from './components/sections/section-detail/section-detail.component';
import { RangesComponent } from './components/ranges/ranges.component';
import { RangeResolve, RangesResolve } from './services/resolvers/range.resolver';
import { RangeDetailComponent } from './components/ranges/range-detail/range-detail.component';
import { StartComponent } from './components/start/start.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/chapters',
    pathMatch: 'full'
  },
  {
    path: 'chapters',
    component: ChaptersComponent,
    resolve: {
      chapters: ChaptersResolve,
      subchapters: SubchaptersResolve
    },
    children: [
      {
        path: '',
        component: StartComponent
      },
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
    resolve: {
      chapters: ChaptersResolve,
      subchapters: SubchaptersResolve
    },
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
  {
    path: 'sections',
    component: SectionsComponent,
    resolve: {
      subchapters: SubchaptersResolve,
      sections: SectionsResolve
    },
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
    resolve: {
      sections: SectionsResolve,
      ranges: RangesResolve
    },
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
