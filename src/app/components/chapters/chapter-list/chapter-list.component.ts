import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Chapter } from '../../../models/chapter.model';
import { ChapterService } from '../../../services/chapter.service';
import { slideInOutAnimation } from '../../../shared/animation';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css'],
  animations: [slideInOutAnimation]
})
export class ChapterListComponent implements OnInit, OnDestroy, AfterContentInit {
  chapters: Array<Chapter>;
  state: string;

  constructor(private chapterService: ChapterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.state = 'out';
    this.chapterService.getChapters().subscribe(result => {
      this.chapters = result;
    });
    console.log('OnInit');
  }
  ngAfterContentInit() {
    this.state = 'in';
  }
  ngOnDestroy() {
    console.log('OnDestroy');
    this.state = 'out';
  }
}
