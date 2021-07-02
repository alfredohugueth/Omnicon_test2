
import { Request, Response } from "express";

export class JuegosController
{

    public registrarJuegos = async ( req : Request, res : Response ) => 
    {
        res.json({
            
            ok : true,
            msg : 'Registrar Juego'
        
        })    
    }

    public filtrarJuego = async ( req : Request, res : Response ) => 
    {
    
        res.json({

            ok : true,
            msg : 'Filtrar Juego'

        })

    }

    public obtenerJuego = async ( req : Request, res : Response ) => 
    {
        
        res.json({

            ok : true,
            msg : 'Obtener Juego'

        })

    }

    
}