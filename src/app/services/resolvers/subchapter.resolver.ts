import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Subchapter } from '../../models/subchapter.model';
import { SubchapterService } from '../subchapter.service';

@Injectable()
export class SubchapterResolve implements Resolve<Subchapter> {

  constructor(private service: SubchapterService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Subchapter> {
    return this.service.getSubchapter(route.params.subchapterId);
  }

}