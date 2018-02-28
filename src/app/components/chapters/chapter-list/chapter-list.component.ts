import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chapter } from '../../../models/chapter.model';
import { ChapterService } from '../../../services/chapter.service';
import { slideInOutAnimation } from '../../../shared/animation';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css'],
  animations: [slideInOutAnimation]
})
export class ChapterListComponent implements OnInit, OnDestroy {
  chapters: Array<Chapter>;

  constructor(private chapterService: ChapterService) { }

  ngOnInit() {
    this.chapterService.getChapters().subscribe(result => {
      this.chapters = result;
    });
    console.log('OnInit');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }
}
