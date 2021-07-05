import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresas } from 'src/app/interfaces/empresas';
import { Juego } from 'src/app/interfaces/juego';
import { EmpresasService } from 'src/app/services/empresas.service';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

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


  constructor( private router : Router, 
               private juegoService : VideojuegosService,
               private empresaService : EmpresasService ) { }

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

  redireccionarDetallesEmpresa( id_empresa : number )
  {
    
    console.log( id_empresa );
    this.empresaService.id_empresa = id_empresa;
    this.router.navigateByUrl( '/products/detalles-empresa' );

  }

}
