import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarDirective } from './sidebar.directive';
import { SidebarComponent } from './sidebar.component';
import { ChapterListComponent } from '../../components/chapters/chapter-list/chapter-list.component';
import { ChaptersModule } from '../../components/chapters/chapters.module';
import { SidebarService } from './sidebar.service';

@NgModule({
  imports: [
    CommonModule,
    ChaptersModule
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
