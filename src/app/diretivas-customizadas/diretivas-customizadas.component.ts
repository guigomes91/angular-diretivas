import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent {

  mostrarCursos = false;

  onMostrarCursos() {
    this.mostrarCursos = true;
    return this.mostrarCursos;
  }
}
