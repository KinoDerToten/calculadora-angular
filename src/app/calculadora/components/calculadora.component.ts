import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public display: string = '0';
  public valorAtual: string;
  public operacao: string = null;
  public novoValor: string = null;
  public resultado: number;
  public valorPendente: string = null;

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
      this.valorAtual = this.display;
      this.display = '';
      this.operacao = operacao;
    } else {
      this.operacao = operacao;
      this.display = '';
      this.valorAtual = this.resultado.toString(); algo
    }
  }

  calcular(): string {
    if (this.operacao != null) {
      this.novoValor = this.display;
    }

    switch (this.operacao) {
      case '+':
        this.resultado = parseFloat(this.valorAtual) + parseFloat(this.novoValor);
        break;
      case '-':
        this.resultado = parseFloat(this.valorAtual) - parseFloat(this.novoValor);
        break;
      case '/':
        this.resultado = parseFloat(this.valorAtual) / parseFloat(this.novoValor);
        break;
      case '*':
        this.resultado = parseFloat(this.valorAtual) * parseFloat(this.novoValor);
        break;
      default:
        this.resultado = 0;
        break;
    }

    this.display = this.resultado.toString();
    return this.display;
  }
}
