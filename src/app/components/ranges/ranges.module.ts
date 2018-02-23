import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { MaterialModule } from '../../shared/material.module';
import { RangesRoutingModule } from './ranges-routing.module';
import { RangesComponent } from './ranges.component';
import { RangeListComponent } from './range-list/range-list.component';
import { RangeItemComponent } from './range-item/range-item.component';
import { RangeService } from '../../services/range.service';
import { RangeResolve } from '../../services/resolvers/range.resolver';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  imports: [
    CommonModule,
    RangesRoutingModule,
    MaterialModule,
    VirtualScrollModule
  ],
  declarations: [
    RangesComponent,
    RangeListComponent,
    RangeItemComponent,
    ItemListComponent
  ],
  exports: [
    RangesRoutingModule,
    RangesComponent,
    RangeListComponent,
    RangeItemComponent
  ],
  providers: [
    RangeService,
    RangeResolve
  ]
})
export class RangesModule { }