import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// class decorator
@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {
  // property decorator
  @Input() highLightColor:string = "purple";

  constructor(private element: ElementRef) {
  this.element.nativeElement.style.border= `5px solid ${this.highLightColor}`
  this.element.nativeElement.style.opacity = "25%"
  }

  //  method decorator
  @HostListener('mouseover') onMouseOver(){
  this.element.nativeElement.style.border = "5px solid red"
  this.element.nativeElement.style.opacity = "100%"

  }
  @HostListener('mouseout') onMouseOut(){
    this.element.nativeElement.style.border = "5px solid black"
    this.element.nativeElement.style.opacity = "25%"
    }
}
