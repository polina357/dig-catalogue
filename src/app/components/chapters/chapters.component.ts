import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../services/chapter.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { ChapterListComponent } from './chapter-list/chapter-list.component';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css'],
  providers: [ ChapterService, SidebarService ]
})
export class ChaptersComponent implements OnInit {

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.loadComponent(ChapterListComponent);
  }
}
