import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SidebarService {
  Sidebar$: Subject<any> = new Subject();
  constructor() { }
  loadComponent(component) {
    this.Sidebar$.next(component);
  }
}