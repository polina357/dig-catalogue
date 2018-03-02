import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Item } from '../models/item.model';

@Injectable()
export class ItemService {
  items = [
    {
      id: '1',
      rangeId: '1',
      title: 'Item1',
      description: 'Description for the item 1'
    },
    {
      id: '2',
      rangeId: '2',
      title: 'Item2',
      description: 'Description for the item 2'
    },
    {
      id: '3',
      rangeId: '3',
      title: 'Item3',
      description: 'Description for the item 3'
    },
    {
      id: '4',
      rangeId: '4',
      title: 'Item4',
      description: 'Description for the item 4'
    },
    {
      id: '5',
      rangeId: '5',
      title: 'Item5',
      description: 'Description for the item 5'
    },
    {
      id: '6',
      rangeId: '6',
      title: 'Item6',
      description: 'Description for the item 6'
    },
    {
      id: '7',
      rangeId: '7',
      title: 'Item7',
      description: 'Description for the item 7'
    },
    {
      id: '8',
      rangeId: '8',
      title: 'Item8',
      description: 'Description for the item 8'
    },
    {
      id: '9',
      rangeId: '9',
      title: 'Item9',
      description: 'Description for the item 9'
    },
    {
      id: '10',
      rangeId: '10',
      title: 'Item10',
      description: 'Description for the item 10'
    },
    {
      id: '11',
      rangeId: '11',
      title: 'Item11',
      description: 'Description for the item 11'
    },
    {
      id: '12',
      rangeId: '12',
      title: 'Item12',
      description: 'Description for the item 12'
    },
    {
      id: '13',
      rangeId: '13',
      title: 'Item13',
      description: 'Description for the item 13'
    },
    {
      id: '14',
      rangeId: '14',
      title: 'Item14',
      description: 'Description for the item 14'
    },
    {
      id: '15',
      rangeId: '1',
      title: 'Item15',
      description: 'Description for the item 15'
    },
    {
      id: '16',
      rangeId: '2',
      title: 'Item16',
      description: 'Description for the item 16'
    },
    {
      id: '17',
      rangeId: '3',
      title: 'Item17',
      description: 'Description for the item 17'
    },
    {
      id: '18',
      rangeId: '4',
      title: 'Item18',
      description: 'Description for the item 18'
    },
    {
      id: '19',
      rangeId: '5',
      title: 'Item19',
      description: 'Description for the item 19'
    },
    {
      id: '20',
      rangeId: '6',
      title: 'Item20',
      description: 'Description for the item 20'
    },
    {
      id: '21',
      rangeId: '7',
      title: 'Item21',
      description: 'Description for the item 21'
    }
  ]

  constructor() { }

  getAllItems() {
    return Observable.of(this.items);
  }

  getItems(rangeId: string): Observable<Item[]> {
    return Observable.of(
      this.items.filter(item => item.rangeId === rangeId)
    );
  }
  getItem(id: string): Observable<Item> {
    return Observable.of(this.items.find(item => item.id === id));
  }
}