import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Subchapter } from '../models/subchapter.model';
import { ChapterParams } from '../models/chapter-params.interface';
import { SubchapterParams } from '../models/subchapter-params.interface';

@Injectable()
export class SubchapterService {
  subchapters = [
    {
      id: '1',
      chapterId: '1',
      title: 'SubChapter1',
      description: 'Description for the subchapter 1'
    },
    {
      id: '2',
      chapterId: '1',
      title: 'SubChapter2',
      description: 'Description for the subchapter 2'
    },
    {
      id: '3',
      chapterId: '2',
      title: 'SubChapter3',
      description: 'Description for the subchapter 3'
    },
    {
      id: '4',
      chapterId: '2',
      title: 'SubChapter4',
      description: 'Description for the subchapter 4'
    },
    {
      id: '5',
      chapterId: '3',
      title: 'SubChapter5',
      description: 'Description for the subchapter 1'
    },
    {
      id: '6',
      chapterId: '3',
      title: 'SubChapter6',
      description: 'Description for the subchapter 2'
    },
    {
      id: '7',
      chapterId: '4',
      title: 'SubChapter7',
      description: 'Description for the subchapter 3'
    },
    {
      id: '8',
      chapterId: '1',
      title: 'SubChapter8',
      description: 'Description for the subchapter 4'
    }
  ]
  constructor(private http: HttpClient) { }

  configUrl = 'http://5a81796c2f37a900124ecc36.mockapi.io/chapters';

  // getSubchapters(chapterParams: ChapterParams): Observable<Subchapter[]> {
  //   return this.http.get<Subchapter[]>(this.configUrl + '/' + chapterParams.id + '/subchapters');
  // }

  // getSubchapter(subchapterParams: SubchapterParams): Observable<Subchapter> {
  //   return this.http.get<Subchapter>(this.configUrl + '/' + subchapterParams.chapterId + '/subchapters/' + subchapterParams.id);
  // }

  getSubchapters(chapterId: string) {
    return Observable.create(() => { return this.subchapters.filter(subchapter => subchapter.chapterId === chapterId) });
  }

  getSubchapter(id: string) {
    return Observable.create(this.subchapters.find(subchapter => subchapter.id === id));
  }
}
