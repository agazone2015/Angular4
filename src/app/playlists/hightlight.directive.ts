import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[sgHightlight]'
})

export class HightlightDirective {

  @Input()
  sgHightlight

  @HostBinding('style.borderLeftColor')
  get getColor() {
    return this.active? this.sgHightlight : ''
  }

  active = false;

  @HostListener('mouseenter', ['$event.target'])
  activate(target) {
    this.active = true;
    console.log('mouseenter', target)
  }

  @HostListener('mouseleave', ['$event.target'])
  deactivate(target) {
    this.active = false;
    console.log('mouseleave', target)
  }

  constructor(private elem: ElementRef) { }

  ngOnInit() {
    this.elem.nativeElement.style.borderLeftColor = this.sgHightlight


  }
}



