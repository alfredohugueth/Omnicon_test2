import { Component, OnInit } from '@angular/core';
import { Facturas } from 'src/app/interfaces/facturas';
import { FacturasService } from 'src/app/services/facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  public titulos : Array<string> = [ 'ID', 'Fecha de Compra', 'Cantidad Vendida', 'Título Juego', 'Total'];
  public contenido! : Facturas[];

  constructor( private facturasService : FacturasService ) { }

  ngOnInit() 
  {
    this.facturasService.listarCompras()
                        .subscribe( ( resp : Facturas[] ) => 
                          {
                            console.log( resp );
                            this.contenido = resp;
                            
                          })
  }

}
