import { Empresas } from "./empresas";
import { Facturas } from "./facturas";
import { Juego } from "./juego";


export interface ServerResponse {

    ok : boolean,
    msg : string,
    
}

export interface juegosResponse extends ServerResponse 
{
    
    juegos : Juego[]

}

export interface empresasResponse extends ServerResponse
{
    
    empresaDB : Empresas

}

export interface listarEmpresasResponse extends ServerResponse
{

    empresasDB : Empresas[]

}

export interface facturasResponse extends ServerResponse
{
    
    compras : Facturas[]

}
