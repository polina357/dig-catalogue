import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Section } from '../models/section.model';

@Injectable()
export class SectionService {
  sections = [
    {
      id: '1',
      subchapterId: '1',
      title: 'Section1',
      description: 'Description for the section 1'
    },
    {
      id: '2',
      subchapterId: '2',
      title: 'Section2',
      description: 'Description for the section 2'
    },
    {
      id: '3',
      subchapterId: '3',
      title: 'Section3',
      description: 'Description for the section 3'
    },
    {
      id: '4',
      subchapterId: '4',
      title: 'Section4',
      description: 'Description for the section 4'
    },
    {
      id: '5',
      subchapterId: '5',
      title: 'Section5',
      description: 'Description for the section 5'
    },
    {
      id: '6',
      subchapterId: '6',
      title: 'Section6',
      description: 'Description for the section 6'
    },
    {
      id: '7',
      subchapterId: '7',
      title: 'Section7',
      description: 'Description for the section 7'
    },
    {
      id: '8',
      subchapterId: '8',
      title: 'Section8',
      description: 'Description for the section 8'
    },
    {
      id: '9',
      subchapterId: '8',
      title: 'Section9',
      description: 'Description for the section 9'
    }
  ]
  constructor() { }

  getSections(subchapterId: string):Observable<Section[]> {
    return Observable.of(
      this.sections.filter(section => section.subchapterId === subchapterId)
    );
  }

  getSection(id: string):Observable<Section> {
    return Observable.of(this.sections.find(section => section.id === id));
  }
}