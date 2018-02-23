import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SectionParams } from '../models/section-params.interface';
import { RangeModel } from '../models/range.model';
import { RangeParams } from '../models/range-params.interface';

@Injectable()
export class RangeService {
  constructor(private http: HttpClient) { }

  configUrl = 'http://5a81796c2f37a900124ecc36.mockapi.io/chapters';

  getRanges(sectionParams: SectionParams): Observable<RangeModel[]> {
    return this.http.get<RangeModel[]>(this.configUrl + '/' + sectionParams.chapterId + '/subchapters/' + sectionParams.subchapterId + '/sections/' + sectionParams.id + '/ranges');
  }

  getRange(rangeParams: RangeParams): Observable<RangeModel> {
    return this.http.get<RangeModel>(this.configUrl + '/' + rangeParams.chapterId + '/subchapters/' + rangeParams.subchapterId + '/sections/' + rangeParams.sectionId + '/ranges/' + rangeParams.id);
  }
}