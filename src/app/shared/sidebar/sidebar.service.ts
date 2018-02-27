import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidebarService {
  Sidebar$: Subject<any>;
  constructor() {
    this.Sidebar$ = new Subject()
  }
  loadComponent(component) {
    this.Sidebar$.next(component);
  }
}