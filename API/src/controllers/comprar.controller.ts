
import { Request, Response } from "express";

export class ComprarController
{

    public comprarProducto = async ( req : Request, res : Response ) => 
    {
        
        res.json({

            ok : true,
            msg : 'Comprar Producto'

        })

    }

    public historicoCompras = async ( req : Request, res : Response ) => 
    {
        
        res.json({
            
            ok : true,
            msg : 'Historico Compras'

        })
    }
}