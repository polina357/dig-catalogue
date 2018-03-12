import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SidebarDirective } from './sidebar.directive';
import { SidebarService } from '../sidebar/sidebar.service';
import { ChapterListComponent } from '../../components/chapters/chapter-list/chapter-list.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, OnDestroy {
  @ViewChild(SidebarDirective) sidebarHost: SidebarDirective;
  sidebarSub: Subscription;
  previousComponent;

  constructor(
    private sidebarService: SidebarService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.sidebarSub = this.sidebarService.Sidebar$.subscribe(params => {
      this.loadComponent(params);
    });
  }

  loadComponent(params) {
    this.removePrevious();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(params.component);
    const viewContainerRef = this.sidebarHost.viewContainerRef;
    this.previousComponent = viewContainerRef.createComponent(componentFactory);
    this.previousComponent.instance.data = params.data;
  }

  private removePrevious() {
    if (this.previousComponent) {
      this.sidebarHost.viewContainerRef.clear();
    }
  }

  ngOnDestroy() {
    this.sidebarSub.unsubscribe();
  }
}
