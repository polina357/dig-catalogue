import { Component, HostBinding } from '@angular/core';

import { Chapter } from '../../../models/chapter.model';
import { slideInOutAnimation } from '../../../shared/animation';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css'],
  animations: [slideInOutAnimation]
})
export class ChapterListComponent {
  chapters: Array<Chapter>;
}
