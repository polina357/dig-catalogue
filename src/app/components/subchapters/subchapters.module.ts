import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { MaterialModule } from '../../shared/material.module';

import { SubchaptersComponent } from './subchapters.component';
import { SubchapterListComponent } from './subchapter-list/subchapter-list.component';
import { SubchapterItemComponent } from './subchapter-item/subchapter-item.component';
import { SubchapterService } from '../../services/subchapter.service';
import { SubchapterResolve, SubchaptersResolve } from '../../services/resolvers/subchapter.resolver';
import { SubchapterDetailComponent } from './subchapter-detail/subchapter-detail.component';

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
    SubchapterResolve,
    SubchaptersResolve,
    SubchapterService
  ],
  entryComponents: [
    SubchapterListComponent
  ]
})
export class SubchaptersModule { }
