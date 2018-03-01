import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';

import { Subchapter } from '../../../models/subchapter.model';
import { SubchapterService } from '../../../services/subchapter.service';
import { Chapter } from '../../../models/chapter.model';
import { slideInOutAnimation } from '../../../shared/animation';
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

  constructor(private subchapterService: SubchapterService,
    private chapterService: ChapterService,
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.chapter = this.route.snapshot.children[0].children[0].data.chapter ;
    this.subchapterService.getSubchapters(this.chapter.id).subscribe(result => {
      this.subchapters = result;
    });
  }
}
