import { Component, OnInit } from '@angular/core';
import { RangeService } from '../../../services/range.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from '../../../models/section.model';

@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.css']
})
export class SectionDetailComponent implements OnInit {
  section: Section;
  ranges: Array<Range>;

  constructor(private rangeService: RangeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  chooseRange(range) {
    this.router.navigate(['ranges', range.id]);
  }
}
