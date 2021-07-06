import { Empresas } from "./empresas";

export interface Juego {

    Id_juego : number,
    Titulo : string,
    Cantidad_stock : number,
    Fecha_salida : Date,
    Plataforma : string,
    precio : number,
    empresa : Empresas
    
}
