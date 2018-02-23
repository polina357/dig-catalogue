import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { MaterialModule } from '../../shared/material.module';
import { SubchaptersRoutingModule } from './subchapters-routing.module';
import { SubchaptersComponent } from './subchapters.component';
import { SubchapterListComponent } from './subchapter-list/subchapter-list.component';
import { SubchapterItemComponent } from './subchapter-item/subchapter-item.component';
import { SubchapterService } from '../../services/subchapter.service';
import { SubchapterResolve } from '../../services/resolvers/subchapter.resolver';

@NgModule({
  imports: [
    CommonModule,
    SubchaptersRoutingModule,
    MaterialModule,
    VirtualScrollModule
  ],
  declarations: [
    SubchaptersComponent,
    SubchapterListComponent,
    SubchapterItemComponent
  ],
  exports: [
    SubchaptersRoutingModule,
    SubchaptersComponent,
    SubchapterListComponent,
    SubchapterItemComponent
  ],
  providers: [
    SubchapterService,
    SubchapterResolve
  ]
})
export class SubchaptersModule { }