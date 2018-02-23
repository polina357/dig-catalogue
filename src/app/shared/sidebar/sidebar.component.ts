import { Component, OnInit, ViewChild, ComponentFactoryResolver, AfterViewInit, OnDestroy, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { SidebarDirective } from './sidebar.directive';
import { SidebarService } from '../sidebar/sidebar.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild(SidebarDirective) sidebarHost: SidebarDirective;
  sidebarSub: Subscription;
  previousComponent;
  constructor(
    private sidebarService: SidebarService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }
  ngOnInit() {
    this.sidebarSub = this.sidebarService.Sidebar$.subscribe(component => {
      this.removePrevious();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const viewContainerRef = this.sidebarHost.viewContainerRef;
      this.previousComponent = viewContainerRef.createComponent(componentFactory);
    });
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
  }
  private removePrevious() {
    if (this.previousComponent) {
      this.sidebarHost.viewContainerRef.clear();
      // this.appRef.detachView(this.previousComponent.hostView);
      // this.previousComponent.destroy();
    }
  }
}
