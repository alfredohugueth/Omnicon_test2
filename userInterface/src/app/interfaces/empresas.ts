import { Juego } from "./juego";

export interface Empresas {

    Id_empresa : number,
    Nombre : string,
    Descripcion : string,
    Inicio_actividades : Date,
    NIT : number,
    Titulos_desarrollados? : Juego[]

}
