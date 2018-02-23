import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterListComponent } from '../chapters/chapter-list/chapter-list.component';
import { SidebarDirective } from '../../shared/sidebar.directive';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChapterListComponent,
    SidebarDirective
  ],
  entryComponents: [ChapterListComponent],
  bootstrap: [SidebarComponent]
})
export class SidebarModule { }
