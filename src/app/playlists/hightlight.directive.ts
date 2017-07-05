import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

// ng g d playlists/hightlight created this @Directive
// as selector for Directive we want sgHightlight
@Directive({
  selector: '[sgHightlight]'
})

export class HightlightDirective {

// putting sgHightlight into @Input we will "teach" html how to act as angular input [()]
  @Input()
  sgHightlight

// @HostBinding - will bind property to host element, If a binding changes, 
// @HostBinding will update the host element.
  @HostBinding('style.borderLeftColor')
  get getColor() {
    return this.active ? this.sgHightlight : ''
  }

  //starting state for active class
  active = false;

  // angular way of using .addListaner to the event.target
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



