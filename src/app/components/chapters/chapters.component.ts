import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { ChapterListComponent } from './chapter-list/chapter-list.component';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  constructor(private sidebarService: SidebarService) { }
  ngOnInit() {
    this.sidebarService.loadComponent(ChapterListComponent);
  }
}
