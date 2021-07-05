import { Component, Input, OnInit } from '@angular/core';
import { Empresas } from 'src/app/interfaces/empresas';
import { Juego } from 'src/app/interfaces/juego';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  @Input() titulos! : Array<string>;
  @Input() contenido! : Array< any >;

  @Input() tipo! : number;

  public juegos : boolean = false;
  public empresas : boolean = false;
  public facturas : boolean = false;


  constructor() { }

  ngOnInit(): void {
    
    switch ( this.tipo )
    {
      
      case 1:
        
        console.log( 'Tipo VideoJuegos ');
        this.juegos = true;
        
      
      break

      case 2:
        
        console.log( 'tipo empresas');
        this.empresas = true;

      break

      case 3:

        console.log( 'tipo Facturas ');
        this.facturas = true;
      
      break

    }
  }

}
