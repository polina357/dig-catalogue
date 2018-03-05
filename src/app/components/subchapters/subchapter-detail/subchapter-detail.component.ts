import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SectionService } from '../../../services/section.service';
import { Subchapter } from '../../../models/subchapter.model';
import { Section } from '../../../models/section.model';
import { ChapterService } from '../../../services/chapter.service';

@Component({
  selector: 'app-subchapter-detail',
  templateUrl: './subchapter-detail.component.html',
  styleUrls: ['./subchapter-detail.component.css']
})
export class SubchapterDetailComponent implements OnInit, OnDestroy {
  subchapter: Subchapter;
  sections: Array<Section>;
  sub: Subscription;

  constructor(private sectionService: SectionService,
    private chapterService: ChapterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.subchapter = this.route.snapshot.data.subchapter;
        this.sectionService.getSectionsBySubchapterId(this.subchapter.id).subscribe(result => {
          this.sections = result;
        });
      }
    });
    this.subchapter = this.route.snapshot.data.subchapter;
    this.sectionService.getSectionsBySubchapterId(this.subchapter.id).subscribe(result => {
      this.sections = result;
    });
  }

  chooseSection(section) {
    this.router.navigate(['sections', section.id]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
