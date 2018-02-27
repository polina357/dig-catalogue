import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Section } from '../../models/section.model';
import { SectionService } from '../section.service';

@Injectable()
export class SectionResolve implements Resolve<Section> {

  constructor(private service: SectionService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Section> {
    return this.service.getSection({
      chapterId: route.parent.parent.parent.params.chapterId,
      subchapterId: route.parent.params.subchapterId,
      id: route.params.sectionId
    });
  }
}