import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name = 'Marcos';
  idButton =  "Marcos";
  //foi so um exemplo
// meuBooleano = "Marcos";

// atualizaBooleano(valor:any) {
//   this.meuBooleano = valor;
//   }

submit() {
  console.log("submit");
}
}
