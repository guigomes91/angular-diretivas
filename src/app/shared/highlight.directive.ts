import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostListener('mouseenter') onMouseOver() {
      this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
      this.backgroundColor = 'white';
  }

  @HostBinding('stye.backgroundColor') backgroundColor = 'yellow';

  @Input() defaultColor = 'white';
  @Input('appHighlight') highlightColor = 'yellow';

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
