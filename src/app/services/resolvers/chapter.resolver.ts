import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Chapter } from '../../models/chapter.model';
import { ChapterService } from '../chapter.service';

@Injectable()
export class ChapterResolve implements Resolve<Chapter> {

  constructor(private service: ChapterService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Chapter> {
    return this.service.getChapter(route.params.chapterId);
  }
}
@Injectable()
export class ChaptersResolve implements Resolve<Chapter[]> {

  constructor(private service: ChapterService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Chapter[]> {
    console.log('chapters resolver');
    return this.service.getChapters();
  }
}
