import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/Observable';

import { Chapter } from '../../../models/chapter.model';
import { Subchapter } from '../../../models/subchapter.model';
import { ChapterService } from '../../../services/chapter.service';

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
    this.getChapter();
  }

  private getChapter() {
    Observable.of(this.chapters)
      .exhaustMap(() => {
        return this.chapterService
          .getChapter(this.currentChapterId.toString());
      })
      .do(chapter => {
        if (!chapter) return;
        chapter.subchapters = this.subchapters.filter(subchapter => subchapter.chapterId === chapter.id);
        this.currentChapterId++;
        const currentChapters = this.chapters.getValue();
        this.chapters.next(currentChapters.concat(chapter));
      })
      .take(1)
      .subscribe();
  }
}
