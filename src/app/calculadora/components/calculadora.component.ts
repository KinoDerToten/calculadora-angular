import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public display: string = '0';
  public valorAtual: string = null;
  public operacao: string = null;
  public novoValor: string = null;
  public resultado: number = null;
  public valorPendente: number = null;
  public valor: string = null;

  constructor(public calculadoraService: CalculadoraService) {

  }

  ngOnInit(): void {
  }

  adicionarNumero(numero: string): void {
    if (this.display === '0') {
      this.display = '';
      this.display += numero;
      this.valor = this.display;
    } else {
      this.display += numero;
      this.valor = this.display;
    }
  }

  operacaoCalculo(operacao: string): number {
    this.display = '';
    this.operacao = operacao;
    if (this.valorAtual === null) {
      this.valorAtual = this.valor;
      this.display = '';
    } else {
      this.novoValor = this.valor;
      this.display = '';
    }

    if (this.valorAtual != null && this.novoValor != null) {
      switch (this.operacao) {
        case '+':
          this.valorPendente = parseFloat(this.valorAtual) + parseFloat(this.novoValor);
          this.valorAtual = this.valorPendente.toString();
          break;
        case '-':
          this.valorPendente = parseFloat(this.valorAtual) - parseFloat(this.novoValor);
          this.valorAtual = this.valorPendente.toString();
          break;
        case '/':
          this.valorPendente = parseFloat(this.valorAtual) / parseFloat(this.novoValor);
          this.valorAtual = this.valorPendente.toString();
          break;
        case '*':
          this.valorPendente = parseFloat(this.valorAtual) * parseFloat(this.novoValor);
          this.valorAtual = this.valorPendente.toString();
          break;
        default:
          this.valorPendente = 0;
          break;
      }
      this.resultado = parseFloat(this.valorAtual);
    } else {
      this.resultado = parseFloat(this.valorAtual);
    }
    console.log(this.valorAtual);
    return this.resultado;
  }

  calcular(): void {
    this.novoValor = this.display;
    switch (this.operacao) {
      case '+':
        this.resultado += parseFloat(this.novoValor);
        break;
      case '-':
        this.resultado -= parseFloat(this.novoValor);
        break;
      case '/':
        this.resultado /= parseFloat(this.novoValor);
        break;
      case '*':
        this.resultado *= parseFloat(this.novoValor);
        break;
      default:
        this.valorPendente = 0;
        break;
    }
    this.display = this.resultado.toString();
  }
}
