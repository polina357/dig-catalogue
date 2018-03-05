import { Directive, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSidebar]'
})
export class SidebarDirective implements OnInit {
  constructor(public viewContainerRef: ViewContainerRef) { }
  ngOnInit() {
  }
}
