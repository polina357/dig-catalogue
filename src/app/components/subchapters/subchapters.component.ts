import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { SubchapterListComponent } from './subchapter-list/subchapter-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subchapters',
  templateUrl: './subchapters.component.html',
  styleUrls: ['./subchapters.component.css']
})
export class SubchaptersComponent implements OnInit {

  constructor(private sidebarService: SidebarService,
  private route: ActivatedRoute) { }
  ngOnInit() {
    let chapters = this.route.snapshot.data.chapters.map(x => Object.assign({}, x));
    let subchapters = this.route.snapshot.data.subchapters.map(x => Object.assign({}, x));
    chapters.map(chapter => {
      chapter.subchapters = subchapters.filter(subchapter => subchapter.chapterId === chapter.id);
    });
    this.sidebarService.loadComponent({component: SubchapterListComponent, data: chapters});
  }

}
