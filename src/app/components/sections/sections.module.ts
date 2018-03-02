import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { MaterialModule } from '../../shared/material.module';

import { SectionsComponent } from './sections.component';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionItemComponent } from './section-item/section-item.component';
import { SectionService } from '../../services/section.service';
import { SectionResolve, SectionsResolve } from '../../services/resolvers/section.resolver';
import { SectionDetailComponent } from './section-detail/section-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    VirtualScrollModule,
    RouterModule
  ],
  declarations: [
    SectionsComponent,
    SectionListComponent,
    SectionItemComponent,
    SectionDetailComponent
  ],
  providers: [
    SectionResolve,
    SectionsResolve,
    SectionService
  ],
  entryComponents: [
    SectionListComponent
  ]
})
export class SectionsModule { }