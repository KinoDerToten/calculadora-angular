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
  public valorPendente: string = null;
  public operacaoPendente: string = null;

  constructor(public calculadoraService: CalculadoraService) {

  }

  ngOnInit(): void {
  }

  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.valorAtual += numero;
      this.display = ''
      this.numeroDecimal();
      this.display = this.valorAtual;
    } else {
      this.display = '';
      this.novoValor += numero;
      this.numeroDecimalNovoValor();
      this.display = this.novoValor;
    }
  }

  numeroDecimal(): void {
    if (this.valorAtual.indexOf('.') > -1) {
      let [parteInteira, parteDecimal]: string[] = this.valorAtual.split('.');
      if (parteInteira === ' ') {
        parteInteira = '0';
      }
      this.valorAtual = [parteInteira, parteDecimal].toString();
      this.valorAtual = this.valorAtual.replace(",", ".");
      console.log([parteInteira]);
    }
  }

  numeroDecimalNovoValor(): void {
    if (this.novoValor.indexOf('.') > -1) {
      let [parteInteira, parteDecimal]: string[] = this.novoValor.split('.');
      this.novoValor = [parteInteira, parteDecimal].toString();
      this.novoValor = this.novoValor.replace(",", ".");
    }
  }

  operacaoCalculo(operacao: string): void {
    if (this.operacao != null && this.novoValor != ' ') {
      this.calcular();
    }
    this.operacao = operacao;
  }

  calcular(): void {
    switch (this.operacao) {
      case '+':
        this.resultado = parseFloat(this.valorAtual) + parseFloat(this.novoValor);
        console.log(this.valorAtual + ' ' + this.novoValor);
        break;
      case '-':
        this.resultado = parseFloat(this.valorAtual) - parseFloat(this.novoValor);
        console.log(this.valorAtual + ' ' + this.novoValor);
        break;
      case '/':
        this.resultado = parseFloat(this.valorAtual) / parseFloat(this.novoValor);
        console.log(this.valorAtual + ' ' + this.novoValor);
        break;
      case '*':
        this.resultado = parseFloat(this.valorAtual) * parseFloat(this.novoValor);
        console.log(this.valorAtual + ' ' + this.novoValor);
        break;
      default:
        this.resultado = 0;
        break;
    }
    this.display = this.resultado.toString();
    this.valorAtual = this.resultado.toString();
    this.novoValor = ' ';
  }
}
