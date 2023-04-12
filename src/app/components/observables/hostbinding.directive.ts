import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective {

  constructor(private Element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.background') background:string = 'transparent';
  @HostBinding('style.border') border:string = 'none';

  @HostListener('mouseover') mouseover(){
    this.background = 'pink';
    this.border = 'red 2px solid';
  }
  @HostListener('mouseleave') mosuseleave(){
    this.background = 'transparent';
    this.border = 'none';
  }
}
