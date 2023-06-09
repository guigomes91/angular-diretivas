import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent {

  title = 'Cadastro de produto';

  cursos: string[] = [];

  mostrarCurso = false;

  save() {
    console.log("Salvando produto...");
  }

  mostrarCursos() {
    this.mostrarCurso = true;
    return this.mostrarCurso;
  }
}
