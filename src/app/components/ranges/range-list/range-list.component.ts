import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { RangeModel } from '../../../models/range.model';
import { slideInOutAnimation } from '../../../shared/animation';

@Component({
  selector: 'app-range-list',
  templateUrl: './range-list.component.html',
  styleUrls: ['./range-list.component.css'],
  animations: [slideInOutAnimation]
})
export class RangeListComponent implements OnInit {
  section: string;
  ranges: Array<RangeModel>;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.section = this.route.snapshot.data.section;
      }
    });

    this.section = this.route.snapshot.data.section;
  }

}
