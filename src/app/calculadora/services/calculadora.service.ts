import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  public display: string = '0';

  constructor() { }



  adicionarNumero(valor: string): string {
    this.display = '';
    this.display += valor;
    return this.display;
  }
}
