import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public display: string = '0';
  public primeiroValor: string;
  public operacao: string = null;
  public segundoValor: string;
  public resultado: number;

  constructor(public calculadoraService: CalculadoraService) {

  }

  ngOnInit(): void {
  }

  adicionarNumero(numero: string): void {
    if (this.display === '0') {
      this.display = '';
      this.display += numero;
    } else {
      this.display += numero;
    }
  }

  operacaoCalculo(operacao: string): void {
    if (this.operacao == null) {
      this.primeiroValor = this.display;
      this.display = '';
      this.operacao = operacao;
    }
  }

  calcular(): string {
    if (this.operacao != null) {
      this.segundoValor = this.display;
    }

    switch (this.operacao) {
      case '+':
        this.resultado = parseFloat(this.primeiroValor) + parseFloat(this.segundoValor);
        break;
      case '-':
        this.resultado = parseFloat(this.primeiroValor) - parseFloat(this.segundoValor);
        break;
      case '/':
        this.resultado = parseFloat(this.primeiroValor) / parseFloat(this.segundoValor);
        break;
      case '*':
        this.resultado = parseFloat(this.primeiroValor) * parseFloat(this.segundoValor);
        break;
      default:
        this.resultado = 0;
        break;
    }

    this.display = this.resultado.toString();
    return this.display;
  }
}
