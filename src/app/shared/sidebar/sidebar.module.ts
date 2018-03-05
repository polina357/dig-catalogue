import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarDirective } from './sidebar.directive';
import { SidebarComponent } from './sidebar.component';
import { SidebarService } from './sidebar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SidebarComponent,
    SidebarDirective
  ],
  exports: [
    SidebarComponent
  ],
  providers: [ SidebarService ]
})
export class SidebarModule { }
