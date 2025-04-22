import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EnviaFormularioService {

  constructor() { }

  enviarFormulario(info: string) {
    console.log("Enviando formulário...");
  }
}
