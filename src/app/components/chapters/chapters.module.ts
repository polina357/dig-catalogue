import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { MaterialModule } from '../../shared/material.module';
import { ChaptersComponent } from './chapters.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterItemComponent } from './chapter-item/chapter-item.component';
import { SubchaptersModule } from '../subchapters/subchapters.module';
import { ChapterResolve } from '../../services/resolvers/chapter.resolver';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    VirtualScrollModule,
    RouterModule
  ],
  declarations: [
    ChaptersComponent,
    ChapterListComponent,
    ChapterItemComponent,
    ChapterDetailComponent
  ],
  providers: [
    ChapterResolve
  ],
  entryComponents: [
    ChapterListComponent
  ]
})
export class ChaptersModule { }