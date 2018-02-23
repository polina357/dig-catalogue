import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Chapter } from '../models/chapter.model';
import { ChapterParams } from '../models/chapter-params.interface';

@Injectable()
export class ChapterService {
  constructor(private http: HttpClient) { }

  configUrl = 'http://5a81796c2f37a900124ecc36.mockapi.io/chapters';

  getChapters():Observable<Chapter[]> {
    return this.http.get<Chapter[]>(this.configUrl);
  }

  getChapter(chapterParams : ChapterParams):Observable<Chapter> {
    return this.http.get<Chapter>(this.configUrl + '/' + chapterParams.id);
  }
}