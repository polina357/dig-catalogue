import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
