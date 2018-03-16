import { Component, OnInit, Inject, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material';

interface imgParams {
  width?: number;
  height?: number;
  top: number;
  left: number;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @ViewChild('image') imageRef: ElementRef;
  img: HTMLImageElement;
  dim: { width: number, height: number };
  container: HTMLElement;
  koef: number;
  initialParams: {
    top: number,
    left: number,
    width: number,
    height: number
  };
  moveHandler;
  removeHandler;
  downHandler;
  initialCoords: { x: number, y: number }
  shift: { x: number, y: number }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private renderer: Renderer2) {
    this.dim = { width: 0, height: 0 };
    this.initialCoords = { x: 0, y: 0 };
    this.initialParams = {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
    this.shift = { x: 0, y: 0 };
  }

  ngOnInit() {
    this.img = this.imageRef.nativeElement;
    this.container = this.img.parentElement;
    this.addEvents();
  }

  addEvents() {
    this.img.addEventListener('load', e => {
      this.dim.width = this.img.naturalWidth;
      this.dim.height = this.img.naturalHeight;
      this.koef = this.dim.width / this.dim.height;
      this.setInitialParams();
    });
    this.img.addEventListener('mousedown', e => {
      this.onMouseDown(e);
    });
    this.img.addEventListener('dragstart', e => {
      return false;
    });
  }

  setInitialParams() {
    if (this.koef >= 1) {
      this.initialParams.width = this.container.offsetWidth;
      this.initialParams.height = this.initialParams.width / this.koef;
      this.initialParams.top = (this.container.offsetHeight - this.initialParams.height) / 2;
    } else {
      this.initialParams.height = this.container.offsetHeight;
      this.initialParams.width = this.initialParams.height * this.koef;
      this.initialParams.left = (this.container.offsetWidth - this.initialParams.width) / 2;
    }
    this.setImage(this.initialParams);
  }

  onMouseDown(e) {
    this.initialCoords.x = e.pageX;
    this.initialCoords.y = e.pageY;
    this.img.addEventListener('mousemove', this.moveHandler = e => {
      this.onMouseMove(e);
    });
    document.addEventListener('mouseup', this.removeHandler = e => {
      this.onMouseUp(e);
    });
    e.preventDefault();
    e.stopPropagation();
  }

  onMouseMove(e) {
    this.moveAt(e);
  }

  moveAt(e) {
    const top = this.img.offsetTop;
    const left = this.img.offsetLeft;
    const maxDragX = (-1) * (this.img.offsetWidth - this.container.offsetWidth);
    const maxDragY = (-1) * (this.img.offsetHeight - this.container.offsetHeight);
    this.shift = {
      x: e.pageX - this.initialCoords.x,
      y: e.pageY - this.initialCoords.y
    }
    if (top + this.shift.y <= 0 && left + this.shift.x <= 0 && top + this.shift.y > maxDragY && left + this.shift.x > maxDragX) {
      this.setImage({ top: top + this.shift.y, left: left + this.shift.x });
    }
    this.initialCoords = { x: e.pageX, y: e.pageY };
  }

  onMouseUp(e) {
    if (this.moveHandler) this.img.removeEventListener('mousemove', this.moveHandler);
    if (this.removeHandler) document.removeEventListener('mouseup', this.removeHandler);
  }

  onMouseWheel(event) {
    const x = event.pageX - this.container.offsetLeft;
    const y = event.pageY - this.container.offsetTop;
    this.zoom(event.deltaY, x, y);
  }

  zoom(shift, x, y) {
    const width = this.img.offsetWidth;
    let top = this.img.offsetTop;
    let left = this.img.offsetLeft;
    let shiftX, shiftY;
    const newWidth = width + shift;
    const newHeight = newWidth / this.koef;
    if (newWidth > this.container.offsetWidth || newHeight > this.container.offsetHeight) {
      if (!x && !y) {
        shiftX = shift / 2;
        shiftY = shiftX / this.koef;
      } else {
        let k1 = x / this.container.offsetWidth;
        let k2 = y / this.container.offsetHeight;
        shiftX = shift * k1;
        shiftY = (shift / this.koef) * k2;
      }
      const dhb = this.container.offsetHeight - (newHeight + top - shiftY);
      const dwb = this.container.offsetWidth - (newWidth + left - shiftX);
      if (dhb > 0) top += dhb;
      if (dwb > 0) left += dwb;

      const dht = top - shiftY;
      const dwt = left - shiftX;
      if (dht > 0) top -= dht;
      if (dwt > 0) left -= dwt;
      console.log(dhb > 0, dwb > 0, dht > 0, dwt > 0);
      this.setImage({ width: newWidth, height: newWidth / this.koef, top: top - shiftY, left: left - shiftX });
    } else {
      this.setImage(this.initialParams);
    }
  }

  setImage(imgParams) {
    if (imgParams.width) this.renderer.setStyle(this.img, 'width', `${imgParams.width}px`);
    if (imgParams.height) this.renderer.setStyle(this.img, 'height', `${imgParams.height}px`);
    this.renderer.setStyle(this.img, 'top', `${imgParams.top}px`);
    this.renderer.setStyle(this.img, 'left', `${imgParams.left}px`);
  }
}
