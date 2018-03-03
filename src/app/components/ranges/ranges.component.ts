import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { RangeListComponent } from './range-list/range-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ranges',
  templateUrl: './ranges.component.html',
  styleUrls: ['./ranges.component.css']
})
export class RangesComponent implements OnInit {

  constructor(private sidebarService: SidebarService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let sections = this.route.snapshot.data.sections.map(x => Object.assign({}, x));
    let ranges = this.route.snapshot.data.ranges.map(x => Object.assign({}, x));
    sections.map(section => {
      section.ranges = ranges.filter(range => range.sectionId === section.id);
    });
    this.sidebarService.loadComponent({ component: RangeListComponent, data: sections });
  }

}
