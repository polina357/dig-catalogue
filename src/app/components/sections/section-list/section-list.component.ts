import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Section } from '../../../models/section.model';
import { slideInOutAnimation } from '../../../shared/animation';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css'],
  animations: [slideInOutAnimation]
})
export class SectionListComponent implements OnInit {
  subchapter: string;
  sections: Array<Section>;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.subchapter = this.route.snapshot.data.subchapter;
      }
    });

    this.subchapter = this.route.snapshot.data.subchapter;
  }
}
