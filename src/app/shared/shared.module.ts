import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { DialogComponent } from './dialog/dialog.component';
import { LoaderComponent } from './loader/loader.component';
import { StickyDirective } from './sticky.directive';
import { ZoomDirective } from './zoom.directive';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    SidebarModule,
    DialogComponent,
    LoaderComponent,
    StickyDirective
  ],
  declarations: [
    DialogComponent,
    LoaderComponent,
    StickyDirective,
    ZoomDirective
  ]
})
export class SharedModule { }
