import { Directive, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective implements AfterViewInit {

  @Output() scrollEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    fromEvent(this.el.nativeElement, 'scroll')
      .subscribe(result => {
        const top = this.el.nativeElement.scrollTop;
        const height = this.el.nativeElement.scrollHeight;
        const offset = this.el.nativeElement.offsetHeight;
        if (top > height - offset - 1) {
          this.scrollEvent.emit(this.el.nativeElement.scrollTop);
        }
      });
  }
}


