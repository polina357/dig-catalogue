import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { SectionListComponent } from './section-list/section-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html'
})
export class SectionsComponent implements OnInit {

  constructor(private sidebarService: SidebarService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const subchapters = this.route.snapshot.data.subchapters.map(x => Object.assign({}, x));
    const sections = this.route.snapshot.data.sections.map(x => Object.assign({}, x));
    subchapters.map(subchapter => {
      subchapter.sections = sections.filter(section => section.subchapterId === subchapter.id);
    });
    this.sidebarService.loadComponent({ component: SectionListComponent, data: subchapters });
  }

}
