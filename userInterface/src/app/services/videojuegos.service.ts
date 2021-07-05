import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Juego } from '../interfaces/juego';
import { retry, take, map, filter } from 'rxjs/operators';
import { juegosResponse } from '../interfaces/server-responses';




@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {
  
  private base_url : string = environment.base_url;

  public juego! : Juego;
  public juegos! : Juego[];

  constructor( private http : HttpClient ) 
  { 

  }

  obtenerJuegos() : Observable<Juego[]>
  {
    
    return this.http.get<juegosResponse>( `${this.base_url}/juegos/listar/juegos` )
                    .pipe(
                      
                      map( resp => resp.juegos )

                    )
                    

  }




}