import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RangeModel } from '../../models/range.model';
import { RangeService } from '../range.service';

@Injectable()
export class RangeResolve implements Resolve<RangeModel> {

  constructor(private service: RangeService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<RangeModel> {
    return this.service.getRange({
      chapterId: route.parent.parent.parent.parent.parent.params.chapterId,
      subchapterId: route.parent.parent.parent.params.subchapterId,
      sectionId: route.parent.params.sectionId,
      id: route.params.rangeId
    });
  }

}