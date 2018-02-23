import { Component, OnInit } from '@angular/core';
import { Section } from '../../../models/section.model';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
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
