import { Component, OnInit, ViewChild, ComponentFactoryResolver, AfterViewInit, OnDestroy } from '@angular/core';
import { SidebarDirective } from '../../shared/sidebar.directive';
import { ChapterListComponent } from '../chapters/chapter-list/chapter-list.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit, OnDestroy {
  @ViewChild(SidebarDirective) sidebarHost: SidebarDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadComponent();
  }

  ngOnDestroy() {

  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChapterListComponent);
    let viewContainerRef = this.sidebarHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
