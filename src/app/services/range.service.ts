import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RangeModel } from '../models/range.model';

@Injectable()
export class RangeService {
  ranges = [
    {
      id: '1',
      sectionId: '1',
      title: 'Range1',
      description: 'Description for the range 1'
    },
    {
      id: '2',
      sectionId: '2',
      title: 'Range2',
      description: 'Description for the range 2'
    },
    {
      id: '3',
      sectionId: '3',
      title: 'Range3',
      description: 'Description for the range 3'
    },
    {
      id: '4',
      sectionId: '4',
      title: 'Range4',
      description: 'Description for the range 4'
    },
    {
      id: '5',
      sectionId: '5',
      title: 'Range5',
      description: 'Description for the range 5'
    },
    {
      id: '6',
      sectionId: '6',
      title: 'Range6',
      description: 'Description for the range 6'
    },
    {
      id: '7',
      sectionId: '7',
      title: 'Range7',
      description: 'Description for the range 7'
    },
    {
      id: '8',
      sectionId: '8',
      title: 'Range8',
      description: 'Description for the range 8'
    },
    {
      id: '9',
      sectionId: '9',
      title: 'Range9',
      description: 'Description for the range 9'
    },
    {
      id: '10',
      sectionId: '1',
      title: 'Range10',
      description: 'Description for the range 10'
    },
    {
      id: '11',
      sectionId: '2',
      title: 'Range11',
      description: 'Description for the range 11'
    },
    {
      id: '12',
      sectionId: '3',
      title: 'Range12',
      description: 'Description for the range 12'
    },
    {
      id: '13',
      sectionId: '4',
      title: 'Range13',
      description: 'Description for the range 13'
    },
    {
      id: '14',
      sectionId: '5',
      title: 'Range14',
      description: 'Description for the range 14'
    },
  ]
  constructor() { }

  getRanges(sectionId: string):Observable<RangeModel[]> {
    return Observable.of(
      this.ranges.filter(range => range.sectionId === sectionId)
    );
  }

  getRange(id: string):Observable<RangeModel> {
    return Observable.of(this.ranges.find(range => range.id === id));
  }
}