import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

interface ImgParams {
  width?: number;
  height?: number;
  top: number;
  left: number;
}

interface CheckParams {
  newWidth: number;
  newHeight: number;
  imgPosX: number;
  imgPosY: number;
  maxOffsetX: number;
  maxOffsetY: number;
}

@Directive({
  selector: "[appZoom]",
  exportAs: "zoomImage"
})
export class ZoomDirective {
  img: HTMLImageElement;
  dim: { width: number; height: number };
  zoomChange = 0.1;
  container: HTMLElement;
  koef: number;
  initialParams: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  moveHandler;
  removeHandler;
  downHandler;
  previousCoords: { x: number; y: number };
  shift: { x: number; y: number };

  constructor(private renderer: Renderer2, private imageRef: ElementRef) {
    this.dim = { width: 0, height: 0 };
    this.previousCoords = { x: 0, y: 0 };
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
    this.img.addEventListener("load", e => {
      this.dim.width = this.img.naturalWidth;
      this.dim.height = this.img.naturalHeight;
      this.koef = this.dim.width / this.dim.height;
      this.setInitialParams();
    });
    this.img.addEventListener("mousedown", e => {
      this.onMouseDown(e);
    });
    this.img.addEventListener("dragstart", e => {
      return false;
    });
  }

  setInitialParams() {
    if (this.koef >= 1) {
      this.initialParams.width = this.container.offsetWidth;
      this.initialParams.height = this.initialParams.width / this.koef;
      this.initialParams.top =
        (this.container.offsetHeight - this.initialParams.height) / 2;
    } else {
      this.initialParams.height = this.container.offsetHeight;
      this.initialParams.width = this.initialParams.height * this.koef;
      this.initialParams.left =
        (this.container.offsetWidth - this.initialParams.width) / 2;
    }
    this.setImage(this.initialParams);
  }

  onMouseDown(e) {
    this.previousCoords.x = e.pageX;
    this.previousCoords.y = e.pageY;
    this.img.addEventListener(
      "mousemove",
      (this.moveHandler = e => {
        this.onMouseMove(e);
      })
    );
    document.addEventListener(
      "mouseup",
      (this.removeHandler = e => {
        this.onMouseUp(e);
      })
    );
    e.preventDefault();
    e.stopPropagation();
  }

  onMouseMove(e) {
    this.moveAt(e);
  }

  moveAt(e) {
    const newTop = this.img.offsetTop + this.shift.y;
    const newLeft = this.img.offsetLeft + this.shift.x;
    const maxDragX = -1 * (this.img.offsetWidth - this.container.offsetWidth);
    const maxDragY = -1 * (this.img.offsetHeight - this.container.offsetHeight);
    this.shift = {
      x: e.pageX - this.previousCoords.x,
      y: e.pageY - this.previousCoords.y
    };
    if (
      newTop <= 0 &&
      newLeft <= 0 &&
      newTop > maxDragY &&
      newLeft > maxDragX
    ) {
      this.setImage({ top: newTop, left: newLeft });
    }
    this.previousCoords = { x: e.pageX, y: e.pageY };
  }

  onMouseUp(e) {
    if (this.moveHandler)
      this.img.removeEventListener("mousemove", this.moveHandler);
    if (this.removeHandler)
      document.removeEventListener("mouseup", this.removeHandler);
  }

  @HostListener("wheel", ["$event"])
  onMouseWheel(e) {
    e.preventDefault();
    const x = e.pageX - this.container.offsetLeft;
    const y = e.pageY - this.container.offsetTop;
    this.zoom(e.deltaY, x, y);
  }

  zoom(shift: number, x: number, y: number) {
    if (!x && !y) {
      x = this.container.offsetWidth / 2;
      y = this.container.offsetHeight / 2;
    }
    let params = this.getParams(x, y, shift);
    if (
      params.newWidth > this.container.offsetWidth ||
      params.newHeight > this.container.offsetHeight
    ) {
      params = this.checkPosition(params);
      this.setImage({
        width: params.newWidth,
        height: params.newHeight,
        top: params.imgPosY,
        left: params.imgPosX
      });
    } else {
      this.setImage(this.initialParams);
    }
  }

  getParams(x: number, y: number, shift: number) {
    let imgCursorX = x - this.img.offsetLeft,
      imgCursorY = y - this.img.offsetTop,
      imgRX = imgCursorX / this.img.offsetWidth,
      imgRY = imgCursorY / this.img.offsetHeight,
      maxOffsetY,
      maxOffsetX;

    let newWidth;
    if (shift > 0) {
      newWidth = this.img.offsetWidth + this.img.offsetWidth * this.zoomChange;
      maxOffsetY = this.initialParams.top * 2;
      maxOffsetX = this.initialParams.left * 2;
    } else {
      newWidth = this.img.offsetWidth - this.img.offsetWidth * this.zoomChange;
      maxOffsetY = this.initialParams.top;
      maxOffsetX = this.initialParams.left;
    }

    const newHeight = newWidth / this.koef;

    let imgPosX = x - newWidth * imgRX,
      imgPosY = y - newHeight * imgRY;

    return {
      newWidth: newWidth,
      newHeight: newHeight,
      imgPosX: imgPosX,
      imgPosY: imgPosY,
      maxOffsetX: maxOffsetX,
      maxOffsetY: maxOffsetY
    };
  }

  checkPosition(params: CheckParams) {
    const dhb =
      this.container.offsetHeight - (params.newHeight + params.imgPosY);
    const dwb = this.container.offsetWidth - (params.newWidth + params.imgPosX);
    if (dhb > 0 && dhb > params.maxOffsetY) params.imgPosY += dhb;
    if (dwb > 0 && dwb > params.maxOffsetX) params.imgPosX += dwb;

    if (params.imgPosY > 0 && params.imgPosY > params.maxOffsetY)
      params.imgPosY = 0;
    if (params.imgPosX > 0 && params.imgPosX > params.maxOffsetX)
      params.imgPosX = 0;

    return params;
  }

  setImage(imgParams: ImgParams) {
    if (imgParams.width)
      this.renderer.setStyle(this.img, "width", `${imgParams.width}px`);
    if (imgParams.height)
      this.renderer.setStyle(this.img, "height", `${imgParams.height}px`);
    this.renderer.setStyle(this.img, "top", `${imgParams.top}px`);
    this.renderer.setStyle(this.img, "left", `${imgParams.left}px`);
  }
}
