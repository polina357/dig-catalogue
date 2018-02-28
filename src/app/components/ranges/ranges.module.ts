import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { MaterialModule } from '../../shared/material.module';
import { RangesComponent } from './ranges.component';
import { RangeListComponent } from './range-list/range-list.component';
import { RangeItemComponent } from './range-item/range-item.component';
import { RangeService } from '../../services/range.service';
import { RangeResolve } from '../../services/resolvers/range.resolver';
import { ItemListComponent } from './item-list/item-list.component';
import { RangeDetailComponent } from './range-detail/range-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    VirtualScrollModule,
    RouterModule
  ],
  declarations: [
    RangesComponent,
    RangeListComponent,
    RangeItemComponent,
    ItemListComponent,
    RangeDetailComponent
  ],
  providers: [
    RangeService,
    RangeResolve
  ],
  entryComponents: [
    RangeListComponent
  ]
})
export class RangesModule { }