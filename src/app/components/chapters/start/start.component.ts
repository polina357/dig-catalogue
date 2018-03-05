import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Chapter } from '../../../models/chapter.model';
import { Subchapter } from '../../../models/subchapter.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  chapters: Array<Chapter>;
  subchapters: Array<Subchapter>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.chapters = this.route.parent.snapshot.data.chapters.map(x => Object.assign({}, x));
    this.subchapters = this.route.parent.snapshot.data.subchapters.map(x => Object.assign({}, x));
    this.chapters.map(chapter => {
      chapter.subchapters = this.subchapters.filter(subchapter => subchapter.chapterId === chapter.id);
    });
  }

}
