import { Directive, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective implements AfterViewInit {
  height: number;
  scrollHeight: number;

  @Output() scrollEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private el: ElementRef) {
    console.log(el);
  }

  ngAfterViewInit() {
    this.height = this.el.nativeElement.clientHeight;

    fromEvent(this.el.nativeElement, 'scroll')
      .subscribe(result => {
        this.height = this.el.nativeElement.scrollHeight;
        this.scrollHeight = this.el.nativeElement.scrollTop + this.el.nativeElement.clientHeight;
        if ((this.height - this.scrollHeight) <= 10) {
          this.scrollEvent.emit(this.el.nativeElement.scrollTop);
        }
      });
  }
}


