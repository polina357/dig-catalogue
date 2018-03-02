import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { RangeModel } from '../../../models/range.model';
import { slideInOutAnimation } from '../../../shared/animation';
import { RangeService } from '../../../services/range.service';

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
    private route: ActivatedRoute, private rangesService: RangeService) { }

  ngOnInit() {
  }

}
