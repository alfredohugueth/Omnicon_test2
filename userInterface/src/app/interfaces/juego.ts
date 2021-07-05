import { Empresas } from "./empresas";

export interface Juego {

    Id_juego : number,
    Titulo : string,
    cantidad_stock : number,
    Fecha_salida : Date,
    Plataforma : string,
    precio : number,
    empresa : Empresas
    
}
