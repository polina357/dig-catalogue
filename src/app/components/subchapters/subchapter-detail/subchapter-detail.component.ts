import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { SectionService } from '../../../services/section.service';
import { Subchapter } from '../../../models/subchapter.model';
import { Section } from '../../../models/section.model';

@Component({
  selector: 'app-subchapter-detail',
  templateUrl: './subchapter-detail.component.html',
  styleUrls: ['./subchapter-detail.component.css']
})
export class SubchapterDetailComponent implements OnInit {
  subchapter: Subchapter;
  sections: Array<Section>;

  constructor(private sectionService: SectionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.subchapter = this.route.snapshot.data.subchapter;
        this.sectionService.getSections(this.subchapter.id).subscribe(result => {
          this.sections = result;
        });
      }
    });
    this.subchapter = this.route.snapshot.data.subchapter;
    this.sectionService.getSections(this.subchapter.id).subscribe(result => {
      this.sections = result;
    });
  }

  chooseSection(section) {
    this.router.navigate(['sections', section.id]);
  }
}
