import { Component, OnInit, Input } from '@angular/core';

import { RangeModel } from '../../../models/range.model';

@Component({
  selector: 'app-range-item',
  templateUrl: './range-item.component.html',
  styleUrls: ['./range-item.component.css']
})
export class RangeItemComponent implements OnInit {
  @Input() range: RangeModel;
  @Input() sectionId: string;

  constructor() { }

  ngOnInit() {
  }

}

