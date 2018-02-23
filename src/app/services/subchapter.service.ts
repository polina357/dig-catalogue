import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Subchapter } from '../models/subchapter.model';
import { ChapterParams } from '../models/chapter-params.interface';
import { SubchapterParams } from '../models/subchapter-params.interface';

@Injectable()
export class SubchapterService {
  constructor(private http: HttpClient) { }

  configUrl = 'http://5a81796c2f37a900124ecc36.mockapi.io/chapters';

  getSubchapters(chapterParams: ChapterParams): Observable<Subchapter[]> {
    return this.http.get<Subchapter[]>(this.configUrl + '/' + chapterParams.id + '/subchapters');
  }

  getSubchapter(subchapterParams: SubchapterParams): Observable<Subchapter> {
    return this.http.get<Subchapter>(this.configUrl + '/' + subchapterParams.chapterId + '/subchapters/' + subchapterParams.id);
  }
}
