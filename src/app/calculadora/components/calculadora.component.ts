import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public display: string = this.calculadoraService.display;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
  }

  adicionaNumero(valor: string): string {
    this.display = this.calculadoraService.adicionarNumero(valor);
    return this.display;
  }

}
