import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../services/chapter.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css'],
  providers: [ ChapterService ]
})
export class ChaptersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
