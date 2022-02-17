import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  public display = '0';
  public valorAtual: string = ' ';
  public operacao: string = null;
  public novoValor: string = ' ';
  public resultado: number = null;
  public valorInvertido: number = null;
  public valorPendente: string = null;

  constructor() { }

  adicionarNumero(numero: string): string {
    if (this.operacao === null) {
      this.valorAtual += numero;
      this.display = ''
      this.numeroDecimal();
      this.display = this.valorAtual;
    } else {
      this.display = '';
      this.novoValor += numero;
      this.valorPendente = this.novoValor;
      this.numeroDecimalNovoValor();
      this.display = this.novoValor;
    }
    return this.display;
  }

  numeroDecimal(): void {
    if (this.valorAtual.indexOf('.') > -1) {
      let [parteInteira, parteDecimal]: string[] = this.valorAtual.split('.');
      if (parteInteira === ' ') {
        parteInteira = '0';
      }
      this.valorAtual = [parteInteira, parteDecimal].toString();
      this.valorAtual = this.valorAtual.replace(",", ".");
    }
  }

  numeroDecimalNovoValor(): void {
    if (this.novoValor.indexOf('.') > -1) {
      let [parteInteira, parteDecimal]: string[] = this.novoValor.split('.');
      this.novoValor = [parteInteira, parteDecimal].toString();
      this.novoValor = this.novoValor.replace(",", ".");
    }
  }

  operacaoCalculo(operacao: string): string {
    let resultado: string;
    if (this.operacao != null && this.novoValor != '') {
      resultado = this.calcular();
      this.operacao = operacao;
      return resultado
    } else {
      this.operacao = operacao;
      return this.valorAtual
    }
  }

  calcular(): string {
    if (this.novoValor === '') {
      this.novoValor = this.valorPendente;
    }

    console.log(this.novoValor);
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
        'selecione uma operacao'
        break;
    }
    this.display = this.resultado.toString();
    this.valorAtual = this.resultado.toString();
    this.novoValor = '';

    return this.display
  }

  inverterOperacao(): string {
    if (this.display === '0') {
      this.valorInvertido = parseFloat(this.display) * -1
      this.display = this.valorInvertido.toString();
    } else if (this.operacao === null && parseFloat(this.valorAtual) >= 0) {
      this.valorInvertido = parseFloat(this.valorAtual) * -1;
      this.valorAtual = this.valorInvertido.toString();
      this.display = this.valorAtual;
    } else {
      this.valorInvertido = parseFloat(this.valorAtual) * -1;
      this.valorAtual = this.valorInvertido.toString();
      this.display = this.valorAtual;
    }

    return this.display
  }

  limpar(): string {
    this.display = '0';
    this.valorAtual = ' ';
    this.operacao = null;
    this.novoValor = ' ';
    this.resultado = null;
    this.valorInvertido = null;

    return this.display
  }

  percent(): void {
    let valuePercent: number;
    if (this.novoValor != ' ') {
      switch (this.operacao) {
        case '+':
          valuePercent = (parseFloat(this.novoValor) / 100) * parseFloat(this.valorAtual);
          this.novoValor = valuePercent.toString();
          break;
        case '-':
          valuePercent = (parseFloat(this.novoValor) / 100) * parseFloat(this.valorAtual);
          this.novoValor = valuePercent.toString();
          break;
        case '*':
          valuePercent = (parseFloat(this.novoValor) / 100);
          this.novoValor = valuePercent.toString();
          break;
        case '/':
          valuePercent = (parseFloat(this.novoValor) / 100);
          this.novoValor = valuePercent.toString();
          break;
        default:
          'selecione uma operação correta'
          break;
      }
    }
  }

}
