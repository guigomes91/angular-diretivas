import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    /*this._renderer.setStyle(this._elementRef.nativeElement,
      'background-color',
      'yellow');*/
      this.backgroundColor = 'yellow';
  }
  //Vai ficar escutando eventos no hospedero da diretiva
  @HostListener('mouseleave') onMouseLeave() {
    /*this._renderer.setStyle(this._elementRef.nativeElement,
      'background-color',
      'white');*/
      this.backgroundColor = 'white';
  }

  //Permite que faça a associação de um atributo ou classe de html para uma váriavel
  @HostBinding('stye.backgroundColor') backgroundColor = '';

  /*constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer2,
  ) { }*/

}
