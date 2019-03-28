import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter') mouseEnterEvent (eventDate:Event) {
    this.renderer.addClass(this.elRef.nativeElement, 'survol');
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventDate:Event) {
    this.renderer.removeClass(this.elRef.nativeElement, 'survol');
  }
}
