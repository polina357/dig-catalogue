import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';

import { Subchapter } from '../../../models/subchapter.model';
import { SubchapterService } from '../../../services/subchapter.service';
import { Chapter } from '../../../models/chapter.model';

@Component({
  selector: 'app-subchapter-list',
  templateUrl: './subchapter-list.component.html',
  styleUrls: ['./subchapter-list.component.css']
})
export class SubchapterListComponent implements OnInit {
  chapter: Chapter;
  subchapters: Array<Subchapter>;

  constructor(private subchapterService: SubchapterService,
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.chapter = this.route.snapshot.data.chapter;
        this.subchapterService.getSubchapters(this.chapter.id).subscribe(result => {
          console.log(result);
          this.subchapters = result;
        });
      }
    })
    this.chapter = this.route.snapshot.data.chapter;
    console.log(this.route);
    this.subchapterService.getSubchapters(this.chapter.id).subscribe(result => {
      this.subchapters = result;
    });
  }
}
