
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({ 
  selector: '[appBasicHighlight]' 
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elemtentRef: ElementRef) {}
  ngOnInit() {
    this.elemtentRef.nativeElement.style.backgroundColor = 'green'
  }
}