import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  n1: number = 0;
  n2: number = 0 ;
  resultado: number = 0;

  somar(){
    this.resultado = this.n1 + this.n2;
  }

  subtrair(){
    this.resultado = this.n1 - this.n2;
  }

  dividir(){
    this.resultado = this.n1 / this.n2;
  }

  multiplicar(){
    this.resultado = this.n1 * this.n2;
  }

  apagar(){
    this.resultado = 0
    this.n1 = 0;
    this.n2 = 0;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
