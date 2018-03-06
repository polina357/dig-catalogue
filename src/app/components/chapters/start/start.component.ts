import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Chapter } from '../../../models/chapter.model';
import { Subchapter } from '../../../models/subchapter.model';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { ChapterService } from '../../../services/chapter.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  /*chapters: Array<Chapter>;
    subchapters: Array<Subchapter>; */
  chapters = new BehaviorSubject([]);
  subchapters: Array<Subchapter>;
  finished = false;
  currentChapterId = 1;

  constructor(private route: ActivatedRoute,
    private chapterService: ChapterService) { }

  ngOnInit() {
    this.getChapter();
    this.subchapters = this.route.parent.snapshot.data.subchapters.map(x => Object.assign({}, x));
  }

  onScrollEvent(e) {
    console.log(e);
    this.getChapter();
  }

  private getChapter() {
    if (this.finished) return;
    this.chapterService
      .getChapter(this.currentChapterId.toString())
      .do(chapter => {
        console.log(chapter);
        if (!chapter) {
          this.finished = true; 
          return;
        }
        chapter.subchapters = this.subchapters.filter(subchapter => subchapter.chapterId === chapter.id);
        this.currentChapterId++;
        const currentChapters = this.chapters.getValue();
        this.chapters.next(currentChapters.concat(chapter));
      })
      .take(1)
      .subscribe();
  }
}
