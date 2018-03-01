import { Component, Input } from '@angular/core';

import { Chapter } from '../../../models/chapter.model';
import { ChapterService } from '../../../services/chapter.service';

@Component({
  selector: 'app-chapter-item',
  templateUrl: './chapter-item.component.html',
  styleUrls: ['./chapter-item.component.css']
})
export class ChapterItemComponent  {
  @Input() chapter: Chapter;

  constructor(private chapterService: ChapterService) { }
}
