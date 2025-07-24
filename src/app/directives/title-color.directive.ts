import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTitleColor]',
})
export class TitleColorDirective {
  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseenter') mouseEnter() {
    this.changeColor('#ff00e9');
  }

  changeColor(color) {
    this.elemRef.nativeElement.style.color = color;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.elemRef.nativeElement.style.color = 'green';
  }
}
