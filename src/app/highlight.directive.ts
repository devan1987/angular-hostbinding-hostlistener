import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighLight {
  @Input('highlight') highLightColor;
  constructor(public eleRef: ElementRef) {
    //  console.log(eleRef);
    // this.eleRef.nativeElement.style.color = 'Green';
  }

  @HostListener('mouseenter') mouseEneter() {
    this.eleRef.nativeElement.style.color = this.highLightColor;
  }
  @HostListener('mouseout') mouseLeave() {
    this.eleRef.nativeElement.style.color = 'red';
  }
}
