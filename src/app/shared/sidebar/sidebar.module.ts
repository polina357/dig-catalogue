import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarDirective } from './sidebar.directive';
import { SidebarComponent } from './sidebar.component';
import { SidebarService } from './sidebar.service';
import { ChapterListComponent } from '../../components/chapters/chapter-list/chapter-list.component';
import { ChaptersModule } from '../../components/chapters/chapters.module';

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
/*   entryComponents: [
    ChapterListComponent
  ],  */
  providers: [
    SidebarService
  ]
})
export class SidebarModule { }
