import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ChapterService } from '../chapter.service';
import { Chapter } from '../../models/chapter.model';
import { SubchapterService } from '../subchapter.service';

@Injectable()
export class ParentChapterResolver implements Resolve<Chapter> {
  constructor(private chapterService: ChapterService, private subchapterService: SubchapterService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Chapter> {
    let res = null;
    this.subchapterService.getSubchapter(route.params.subchapterId).subscribe(result => {
      let subchapter = result;
      res = this.chapterService.getChapter(subchapter.chapterId);
    });
    return res;
  }
}