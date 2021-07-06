import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Empresas } from 'src/app/interfaces/empresas';
import { Juego } from 'src/app/interfaces/juego';
import { ComprarComponent } from 'src/app/pages/comprar/comprar.component';
import { EmpresasService } from 'src/app/services/empresas.service';
import { FacturasService } from 'src/app/services/facturas.service';
import { VideojuegosService } from 'src/app/services/videojuegos.service';
import Swal from 'sweetalert2';

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
  public juego! : any;
  public cantidadIngresada : string = '0';
  closeResult!: string;
  valorDefecto : string = '1';
  cargando : boolean = false;
  public tipoFiltro! : string;
  public cajaTexto! : string;

  public comprarVideoJuego = this.fb.group({

    cantidad : ['', Validators.required ],
    
    

  })

  constructor( private router : Router, 
               private juegoService : VideojuegosService,
               private empresaService : EmpresasService,
               private modalService : NgbModal,
               private fb : FormBuilder,
               private facturaService : FacturasService ) { }

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

  
  comprarJuego(content: any, data : any) {
    console.log( content );
    this.juego = data;
    console.log(this.juego)
    this.valorDefecto = (parseInt(this.juego.Cantidad_stock)/2).toString();
    this.cantidadIngresada = this.valorDefecto;
    this.modalService.open( content ) 
  };

  actualizarValor()
  {
    
    console.log( 'Cambio valor ');
    this.cantidadIngresada = this.comprarVideoJuego.value.cantidad;
    console.log( this.cantidadIngresada );
    
  }


  finalizarCompra()
  {

    this.cargando = true;
    console.log('Click a comprar');
    this.facturaService.comprarProducto( this.juego, (this.comprarVideoJuego.value.cantidad || this.cantidadIngresada) )
                       .subscribe( resp =>
                        {

                          this.cargando = false;
                          console.log( resp );
                          this.modalService.dismissAll();
                          this.juegoService.obtenerJuegos()
                                           .subscribe( resp =>
                                            {
                                              this.contenido = resp;
                                            })
                          Swal.fire('Estado de compra', 'La compra del producto fue todo un éxito', 'success');

                        })
    
  }

  ejecutarFiltro()
  {
    console.log( 'Ejecutar filtro ');
    const tipo_filtro : number = parseInt( this.tipoFiltro );

    if ( isNaN( tipo_filtro ) || this.cajaTexto == undefined )
    {
      
      return Swal.fire('Error', 'Ingresa el tipo de filtro y la cantidad o nombre que deseas filtrar', 'error' );

    }

    if ( tipo_filtro == 3 && isNaN( parseInt(this.cajaTexto) ) )
    {
      return Swal.fire('Error', 'Ingresa un valor numérico para filtro por precio', 'error');
    }

    // Realizamos el envió de la información
    this.juegoService.filtrarJuegos( tipo_filtro, this.cajaTexto )
                     .subscribe( resp =>
                      {
                        
                        console.log( resp );
                        this.contenido = resp;
                        
                      })
    return;
  }
    
  

  
}
