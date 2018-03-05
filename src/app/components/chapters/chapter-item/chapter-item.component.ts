import { Component, Input } from '@angular/core';

import { Chapter } from '../../../models/chapter.model';

@Component({
  selector: 'app-chapter-item',
  templateUrl: './chapter-item.component.html',
  styleUrls: ['./chapter-item.component.css']
})
export class ChapterItemComponent  {
  @Input() chapter: Chapter;

  constructor() { }
}
