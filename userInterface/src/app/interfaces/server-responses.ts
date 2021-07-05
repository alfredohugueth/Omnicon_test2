import { Juego } from "./juego";


export interface ServerResponse {

    ok : boolean,
    msg : string,
    
}

export interface juegosResponse extends ServerResponse 
{
    
    juegos : Juego[]

}
