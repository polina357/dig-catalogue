import { Component, OnInit, AfterViewInit } from '@angular/core';
import { slideInOutAnimation } from '../../../shared/animation';

import { Subchapter } from '../../../models/subchapter.model';
import { SubchapterService } from '../../../services/subchapter.service';
import { Chapter } from '../../../models/chapter.model';
import { ChapterService } from '../../../services/chapter.service';

@Component({
  selector: 'app-subchapter-list',
  templateUrl: './subchapter-list.component.html',
  styleUrls: ['./subchapter-list.component.css'],
  animations: [slideInOutAnimation]
})
export class SubchapterListComponent implements OnInit {
  chapter: Chapter;
  subchapters: Array<Subchapter>;

  constructor() { }

  ngOnInit() {
  }
}
