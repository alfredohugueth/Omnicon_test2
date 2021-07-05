import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Empresas } from '../interfaces/empresas';
import { empresasResponse } from '../interfaces/server-responses';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  public id_empresa! : number;
  private base_url : string = environment.base_url;

  constructor( private http : HttpClient ) 
  { }

  buscarEmpresa( id_empresa : number )
  {
    return this.http.get<empresasResponse>( `${this.base_url}/empresas/${ id_empresa }` )
                    .pipe(

                      map( (resp ) => resp.empresaDB)
                      

                    )
  }
}
