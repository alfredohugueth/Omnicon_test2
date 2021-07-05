import { Component, Input, OnInit } from '@angular/core';
import { Empresas } from 'src/app/interfaces/empresas';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor() { }

  @Input() titulos! : Array<string>;
  @Input() contenido! : Empresas;
  @Input() tipo! : number;

  ngOnInit(): void 
  {
    switch ( this.tipo )
    {
      case 1 :
        console.log( 'Detalles Empresa');
      break

    }
  }



}
