import { Component, ViewChild, ComponentFactoryResolver, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SidebarDirective } from './sidebar.directive';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit, OnDestroy {
  @ViewChild(SidebarDirective) sidebarHost: SidebarDirective;
  sidebarSub: Subscription;
  previousComponent;
  constructor(
    private sidebarService: SidebarService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }
  ngAfterViewInit() {
    console.log('init');
    this.sidebarSub = this.sidebarService.Sidebar$.subscribe(component => {
      this.loadComponent(component);
    });
    console.log(this.sidebarSub);
  }
  loadComponent(component) {
    console.log(component);
    this.removePrevious();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.sidebarHost.viewContainerRef;
    this.previousComponent = viewContainerRef.createComponent(componentFactory);
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
