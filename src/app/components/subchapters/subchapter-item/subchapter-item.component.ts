import { Component, OnInit, Input } from '@angular/core';
import { Subchapter } from '../../../models/subchapter.model';

@Component({
  selector: 'app-subchapter-item',
  templateUrl: './subchapter-item.component.html',
  styleUrls: ['./subchapter-item.component.css']
})
export class SubchapterItemComponent implements OnInit {
  @Input() subchapter: Subchapter;
  @Input() chapterId: string;

  constructor() { 
  }

  ngOnInit() {
  }

}
