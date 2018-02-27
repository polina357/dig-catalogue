import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';
import { Subchapter } from '../../../models/subchapter.model';
import { SubchapterService } from '../../../services/subchapter.service';
import { Chapter } from '../../../models/chapter.model';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {
  subchapters: Array<Subchapter>;
  chapter: Chapter;

  constructor(private subchapterService: SubchapterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log('detail init');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.chapter = this.route.snapshot.data.chapter;
      }
    });
    this.chapter = this.route.snapshot.data.chapter;
    this.subchapterService.getSubchapters(this.chapter.id).subscribe(result => {
      this.subchapters = result;
    });
  }

}
