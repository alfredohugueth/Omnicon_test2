
import { Request, Response } from "express";

export class EmpresasController
{

    public obtenerEmpresa = async ( req : Request, res : Response ) => {
        
        res.json({

            ok : true,
            msg : 'Obtener Empresa'
            
        })
    }
}