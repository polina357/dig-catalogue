import { Component, OnInit } from '@angular/core';

import { Item } from '../../../models/item.model';

@Component({
  selector: 'app-range-detail',
  templateUrl: './range-detail.component.html',
  styleUrls: ['./range-detail.component.css']
})
export class RangeDetailComponent implements OnInit {
  range: Range;
  items: Array<Item>;

  constructor() { }

  ngOnInit() {
  }

}
