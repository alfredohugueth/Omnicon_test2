import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/interfaces/empresas';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-detalle-empresas',
  templateUrl: './detalle-empresas.component.html',
  styleUrls: ['./detalle-empresas.component.css']
})
export class DetalleEmpresasComponent implements OnInit {

  public empresaMostrada! : Empresas;
  public titulos : Array<string> = [ 'Nombre', 'Descripción', 'Año de inicio de actividades', 'NIT' ];
  

  constructor( private empresaService : EmpresasService ) { }

  ngOnInit() 
  {
    
    /* Buscamos el detalle de la empresa */
    this.empresaService.buscarEmpresa( this.empresaService.id_empresa )
                       .subscribe(
                         ( res : Empresas ) =>
                         {

                           console.log( res );
                           this.empresaMostrada = res

                         }
                       )
    
    
                       
  }

}
