import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RangeModel } from '../../models/range.model';
import { RangeService } from '../range.service';

@Injectable()
export class RangeResolve implements Resolve<RangeModel> {

  constructor(private service: RangeService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<RangeModel> {
    return this.service.getRange(route.params.rangeId);
  }
}
@Injectable()
export class RangesResolve implements Resolve<RangeModel[]> {

  constructor(private service: RangeService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<RangeModel[]> {
    return this.service.getAllRanges();
  }
}