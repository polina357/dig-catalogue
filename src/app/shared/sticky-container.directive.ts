import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStickyContainer]'
})
export class StickyContainerDirective {
  /*   @Output('scrollEvent') scrollEvent: EventEmitter<number> = new EventEmitter<number>();
    @HostListener('scroll', ['$event'])
    onScroll(event) {
      this.scrollEvent.emit(event.target.scrollTop);
    } */
  constructor(private el: ElementRef) {
  }

}
