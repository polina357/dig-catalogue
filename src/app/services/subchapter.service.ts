import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Subchapter } from '../models/subchapter.model';

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
  constructor() { }

  getAllSubchapters() {
    return Observable.of(this.subchapters);
  }

  getSubchapters(chapterId: string): Observable<Subchapter[]> {
    return Observable.of(
      this.subchapters.filter(subchapter => subchapter.chapterId === chapterId)
    );
  }

  getSubchapter(id: string): Observable<Subchapter> {
    return Observable.of(this.subchapters.find(subchapter => subchapter.id === id));
  }
}
