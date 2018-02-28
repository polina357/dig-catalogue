import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { MaterialModule } from '../../shared/material.module';

import { SubchaptersComponent } from './subchapters.component';
import { SubchapterListComponent } from './subchapter-list/subchapter-list.component';
import { SubchapterItemComponent } from './subchapter-item/subchapter-item.component';
import { SubchapterService } from '../../services/subchapter.service';
import { SubchapterResolve } from '../../services/resolvers/subchapter.resolver';
import { SubchapterDetailComponent } from './subchapter-detail/subchapter-detail.component';
import { ParentChapterResolver } from '../../services/resolvers/parent-chapter.resolver';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    VirtualScrollModule,
    RouterModule
  ],
  declarations: [
    SubchaptersComponent,
    SubchapterListComponent,
    SubchapterItemComponent,
    SubchapterDetailComponent
  ],
  exports: [
    SubchaptersComponent,
    SubchapterListComponent,
    SubchapterItemComponent
  ],
  providers: [
    SubchapterService,
    SubchapterResolve,
    ParentChapterResolver
  ],
  entryComponents: [
    SubchapterListComponent
  ]
})
export class SubchaptersModule { }