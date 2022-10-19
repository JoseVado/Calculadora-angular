import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  operandoA: number;
  operandoB: number;

  @Output() resultado =  new EventEmitter<number>();

  sumar(){
    this.resultado.emit(this.operandoA + this.operandoB);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
