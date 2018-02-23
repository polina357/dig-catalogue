import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { MaterialModule } from '../../shared/material.module';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionItemComponent } from './section-item/section-item.component';
import { SectionService } from '../../services/section.service';
import { SectionResolve } from '../../services/resolvers/section.resolver';

@NgModule({
  imports: [
    CommonModule,
    SectionsRoutingModule,
    MaterialModule,
    VirtualScrollModule
  ],
  declarations: [
    SectionsComponent,
    SectionListComponent,
    SectionItemComponent
  ],
  exports: [
    SectionsRoutingModule,
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