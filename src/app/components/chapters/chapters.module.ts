import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { MaterialModule } from '../../shared/material.module';
import { ChaptersRoutingModule } from './chapters-routing.module';
import { ChaptersComponent } from './chapters.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterItemComponent } from './chapter-item/chapter-item.component';
import { SubchaptersModule } from '../subchapters/subchapters.module';
import { ChapterResolve } from '../../services/resolvers/chapter.resolver';


@NgModule({
  imports: [
    CommonModule,
    ChaptersRoutingModule,
    MaterialModule,
    VirtualScrollModule
  ],
  declarations: [
    ChaptersComponent,
    ChapterListComponent,
    ChapterItemComponent
  ],
  providers: [
    ChapterResolve
  ]
})
export class ChaptersModule { }