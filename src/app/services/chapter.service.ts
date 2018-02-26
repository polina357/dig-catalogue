import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Chapter } from '../models/chapter.model';
import { ChapterParams } from '../models/chapter-params.interface';

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
  constructor(private http: HttpClient) { }

  // configUrl = 'http://5a81796c2f37a900124ecc36.mockapi.io/chapters';

  // getChapters():Observable<Chapter[]> {
  //   return this.http.get<Chapter[]>(this.configUrl);
  // }

  // getChapter(chapterParams : ChapterParams):Observable<Chapter> {
  //   return this.http.get<Chapter>(this.configUrl + '/' + chapterParams.id);
  // }
  getChapters() {
    return Observable.create(this.chapters);;
  }

  getChapter(id: string) {
    return Observable.create(this.chapters.find(chapter => chapter.id === id));
  }
}