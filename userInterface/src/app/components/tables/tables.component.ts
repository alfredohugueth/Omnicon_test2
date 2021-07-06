import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Empresas } from 'src/app/interfaces/empresas';
import { Juego } from 'src/app/interfaces/juego';
import { ComprarComponent } from 'src/app/pages/comprar/comprar.component';
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
  public juego! : Juego;
  public cantidadIngresada! : string;
  closeResult!: string;

  public comprarVideoJuego = this.fb.group({

    cantidad : ['', Validators.required ],
    titulo : ['', Validators.required ]
    

  })



  constructor( private router : Router, 
               private juegoService : VideojuegosService,
               private empresaService : EmpresasService,
               private modalService : NgbModal,
               private fb : FormBuilder ) { }

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

  
  comprarJuego(content: any, data : Juego) {
    console.log( content );
    this.juego = data;
    this.modalService.open( content ) 
  };

  actualizarValor()
  {
    
    console.log( 'Cambio valor ');
    this.cantidadIngresada = this.comprarVideoJuego.value;
    console.log( this.cantidadIngresada );
    
  }
    
  

  
}
