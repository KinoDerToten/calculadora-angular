import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public display: string = this.calculadoraService.display;

  constructor(private calculadoraService: CalculadoraService) {

  }

  ngOnInit(): void {
  }

  adicionarNumero(numero: string): void {
    this.display = this.calculadoraService.adicionarNumero(numero);
  }

  numeroDecimal(): void {
    this.calculadoraService.numeroDecimal();
  }

  numeroDecimalNovoValor(): void {
    this.calculadoraService.numeroDecimalNovoValor();
  }

  operacaoCalculo(operacao: string): void {
    this.display = this.calculadoraService.operacaoCalculo(operacao);
  }

  calcular(): void {
    this.display = this.calculadoraService.calcular();
  }

  inverterOperacao(): void {
    this.calculadoraService.inverterOperacao();
  }

  limpar(): void {
    this.calculadoraService.limpar();
  }

  percent(): void {
    this.calculadoraService.percent();
  }
}
