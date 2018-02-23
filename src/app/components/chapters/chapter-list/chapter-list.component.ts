import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Chapter} from '../../../models/chapter.model';
import { ChapterService } from '../../../services/chapter.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  chapters: Array<Chapter>;

  constructor(private chapterService: ChapterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.chapterService.getChapters().subscribe(result => {
      this.chapters = result;
    });
  }

}
