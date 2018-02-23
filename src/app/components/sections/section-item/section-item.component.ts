import { Component, OnInit, Input } from '@angular/core';

import { Section } from '../../../models/section.model';

@Component({
  selector: 'app-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.css']
})
export class SectionItemComponent implements OnInit {
  @Input() section: Section;
  @Input() subchapterId: string;

  constructor() { }

  ngOnInit() {
  }

}
