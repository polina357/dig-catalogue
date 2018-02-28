import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { SectionListComponent } from './section-list/section-list.component';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.loadComponent(SectionListComponent);
  }

}
