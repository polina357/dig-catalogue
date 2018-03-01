import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Subchapter } from '../../../models/subchapter.model';
import { SubchapterService } from '../../../services/subchapter.service';
import { Chapter } from '../../../models/chapter.model';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit, OnDestroy {
  subchapters: Array<Subchapter>;
  chapter: Chapter;
  sub;

  constructor(private subchapterService: SubchapterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.chapter = this.route.snapshot.data.chapter;
        this.subchapterService.getSubchapters(this.chapter.id).subscribe(result => {
          this.subchapters = result;
        });
      }
    });
    this.chapter = this.route.snapshot.data.chapter;
    this.subchapterService.getSubchapters(this.chapter.id).subscribe(result => {
      this.subchapters = result;
    });
  }

  chooseSubchapter(subchapter) {
    this.router.navigate(['subchapters', subchapter.id]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
