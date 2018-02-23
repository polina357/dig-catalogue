import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SubchapterParams } from '../models/subchapter-params.interface';
import { Section } from '../models/section.model';
import { SectionParams } from '../models/section-params.interface';

@Injectable()
export class SectionService {
  constructor(private http: HttpClient) { }

  configUrl = 'http://5a81796c2f37a900124ecc36.mockapi.io/chapters';

  getSections(subchapterParams: SubchapterParams): Observable<Section[]> {
    return this.http.get<Section[]>(this.configUrl + '/' + subchapterParams.chapterId + '/subchapters/' + subchapterParams.id + '/sections');
  }

  getSection(sectionParams: SectionParams): Observable<Section> {
    return this.http.get<Section>(this.configUrl + '/' + sectionParams.chapterId + '/subchapters/' + sectionParams.subchapterId + '/sections/' + sectionParams.id);
  }
}