import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { ChapterListComponent } from './chapter-list/chapter-list.component';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html'
})
export class ChaptersComponent implements OnInit {

  constructor(private sidebarService: SidebarService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('chapters init');
    this.sidebarService.loadComponent({ component: ChapterListComponent, data: this.route.snapshot.data });
  }
}
