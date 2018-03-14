import { Directive, HostListener, Input, Output, EventEmitter, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';

interface Params {
  height: number,
  containerHeight: number,
  offsetTop: number,
  offsetBottom: number
}

@Directive({
  selector: '[appSticky]'
})
export class StickyDirective implements AfterViewInit {
  @Input() appSticky: Element;
  obs$;

  params: Params = {
    height: 0,
    containerHeight: 0,
    offsetTop: 0,
    offsetBottom: 0
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.initializeParams();
    this.containerScrollCallback();
  }
/* 
  @HostListener('scrollEvent', ['$event'])
  onContainerScroll(event) {
    console.log('container scroll event', event);
  } */

  constructor(private el: ElementRef,
    public renderer: Renderer2) { }

  ngAfterViewInit() {
    this.initializeParams();
    this.obs$.subscribe(result => {
      this.containerScrollCallback();
    });
  }

  initializeParams() {
    this.obs$ = this.getScrollEvent(this.appSticky);
    this.params.height = this.el.nativeElement.offsetHeight;
    this.params.containerHeight = this.el.nativeElement.parentElement.offsetHeight;
    this.params.offsetTop = this.getOffset();
    this.params.offsetBottom = this.params.containerHeight + this.params.offsetTop;
  }

  getScrollEvent(container) {
    return fromEvent(container, 'scroll');
  }

  getOffset() {
    const containerCoord = this.getPosition(this.appSticky);
    const elCoord = this.getPosition(this.el.nativeElement);
    return elCoord.y - containerCoord.y;
  }

  getPosition(el) {
    let xPos = 0;
    let yPos = 0;
    while (el) {
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }

  containerScrollCallback() {
    const containerScroll = this.appSticky.scrollTop;
    if (containerScroll >= this.params.offsetTop && containerScroll <= this.params.offsetBottom - this.params.height) {
      this.renderer
        .setStyle(this.el.nativeElement, 'transform', `translate(0, ${containerScroll - this.params.offsetTop}px)`);
    } else {
      this.renderer
        .setStyle(this.el.nativeElement, 'transform', `translate(0, 0)`);
    }
  }
}
