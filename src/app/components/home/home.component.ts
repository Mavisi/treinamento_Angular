import { Component, inject, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnviaFormularioService } from '../../service/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioService= inject(EnviaFormularioService);
  name = 'Marcos';
  idButton =  "Marcos";
  deveMostrarTitulo= true;
  listItems = ["asda", "dois ", "tres"];

  @Input() minhaPropsDeFora!: string;
  
  //foi so um exemplo
// meuBooleano = "Marcos";
// atualizaBooleano(valor:any) {
//   this.meuBooleano = valor;
//   }

submit() {
  this.enviaFormularioService.enviarFormulario("oi");
}
}

