import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Chapter } from '../models/chapter.model';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ChapterService {
  chapters = [
    {
      id: '1',
      title: 'Chapter1',
      description: 'Description for the chapter 1'
    },
    {
      id: '2',
      title: 'Chapter2',
      description: 'Description for the chapter 2'
    },
    {
      id: '3',
      title: 'Chapter3',
      description: 'Description for the chapter 3'
    },
    {
      id: '4',
      title: 'Chapter4',
      description: 'Description for the chapter 4'
    },
  ]
  constructor(private route: ActivatedRoute) { }

  selectedChapter: Chapter;
  
  getChapters():Observable<Chapter[]> {
    return Observable.of(this.chapters);
  }

  getChapter(id: string):Observable<Chapter> {
    return Observable.of(this.chapters.find(chapter => chapter.id === id));
  }
}