import { Directive, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Directive({
  selector: '[appSticky]'
})
export class StickyDirective implements AfterViewInit {

  @Output() stickyEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    fromEvent(this.el.nativeElement, 'scroll')
      .subscribe(result => {
        console.log(result);
      });
  }
}
