import { Directive, HostListener, Input, Output, EventEmitter, ElementRef, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';

interface Params {
  height: number,
  containerHeight: number,
  offsetTop: number,
  offsetBottom: number,
  offsetLeft: number,
  containerCoord: { x: number, y: number },
  elCoord: { x: number, y: number }
}

@Directive({
  selector: '[appSticky]'
})
export class StickyDirective implements AfterViewInit, OnDestroy {
  @Input() appSticky: HTMLElement;
  obs$;

  params: Params = {
    height: 0,
    containerHeight: 0,
    offsetTop: 0,
    offsetBottom: 0,
    offsetLeft: 0,
    containerCoord: { x: 0, y: 0 },
    elCoord: { x: 0, y: 0 }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.initializeParams();
    this.containerScrollCallback();
  }

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
    this.params.offsetLeft = this.params.elCoord.x - this.params.containerCoord.x;
  }

  getScrollEvent(container) {
    return fromEvent(container, 'scroll');
  }

  getOffset() {
    this.params.containerCoord = this.getPosition(this.appSticky);
    this.params.elCoord = this.getPosition(this.el.nativeElement);
    return this.params.elCoord.y - this.params.containerCoord.y;
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
      this.scrollEnter();
    } else if (containerScroll >= this.params.offsetTop) {
      this.scrollLeave();
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'position', 'static');
    }
  }

  scrollEnter() {
    this.renderer
      .setStyle(this.el.nativeElement, 'position', 'fixed');
    this.renderer
      .setStyle(this.el.nativeElement, 'top', `${this.params.elCoord.y - this.params.offsetTop}px`);
    this.renderer
      .setStyle(this.el.nativeElement, 'left', `${this.params.elCoord.x + 1}px`);
  }

  scrollLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
    this.renderer
      .setStyle(this.el.nativeElement, 'top', `${this.params.containerHeight - this.params.height}px`);
    this.renderer
      .setStyle(this.el.nativeElement, 'left', `${this.params.offsetLeft}px`);
  }

  ngOnDestroy() {
    this.obs$.unsubscribe();
  }
}
