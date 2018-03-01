import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { RangeService } from '../../../services/range.service';
import { Section } from '../../../models/section.model';
import { RangeModel } from '../../../models/range.model';

@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.css']
})
export class SectionDetailComponent implements OnInit, OnDestroy {
  section: Section;
  ranges: Array<RangeModel>;
  sub;

  constructor(private rangeService: RangeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.section = this.route.snapshot.data.section;
        this.rangeService.getRanges(this.section.id).subscribe(result => {
          this.ranges = result;
        });
      }
    });
    this.section = this.route.snapshot.data.section;
    console.log(this.route.snapshot);
    this.rangeService.getRanges(this.section.id).subscribe(result => {
      this.ranges = result;
    });
  }

  chooseRange(range) {
    this.router.navigate(['ranges', range.id]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
