import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Juego } from '../interfaces/juego';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  public base_url : string = environment.base_url

  constructor( private http : HttpClient ) { }

  comprarProducto( juego : Juego, cantidad : string)
  {
    console.log( juego );
    console.log( cantidad );

    return this.http.put( `${this.base_url}/factura/comprar/${ juego.Id_juego }`, { cantidad : parseInt( cantidad ) })
  }
}
