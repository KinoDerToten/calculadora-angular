import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public display: string = '0';
  public valorAtual: string = ' ';
  public operacao: string = null;
  public novoValor: string = ' ';
  public resultado: number = null;
  public valorPendente: number = null;

  constructor(public calculadoraService: CalculadoraService) {

  }

  ngOnInit(): void {
  }

  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.valorAtual += numero;
      this.display = ''
      this.display = this.valorAtual;
      console.log(this.valorAtual);
    } else {
      this.display = '';
      this.novoValor += numero;
      this.display = this.novoValor;
    }
  }

  operacaoCalculo(operacao: string): void {
    this.operacao = operacao;

    /*if (this.valorAtual === null) {
      this.valorAtual = this.display;
      this.display = ''
    } else {
      this.novoValor = this.display;
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
    console.log(this.resultado);*/
  }
}
