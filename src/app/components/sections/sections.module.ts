import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { MaterialModule } from '../../shared/material.module';

import { SectionsComponent } from './sections.component';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionItemComponent } from './section-item/section-item.component';
import { SectionService } from '../../services/section.service';
import { SectionResolve } from '../../services/resolvers/section.resolver';
import { SectionDetailComponent } from './section-detail/section-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    VirtualScrollModule
  ],
  declarations: [
    SectionsComponent,
    SectionListComponent,
    SectionItemComponent,
    SectionDetailComponent
  ],
  exports: [
    SectionsComponent,
    SectionListComponent,
    SectionItemComponent
  ],
  providers: [
    SectionService,
    SectionResolve
  ]
})
export class SectionsModule { }