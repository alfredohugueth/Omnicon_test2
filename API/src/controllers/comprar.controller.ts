
import { Request, Response } from "express";
import { Compras } from "../database/entities/compra.entity";
import { VideoJuego } from "../database/entities/videoJuego.entity";
import HttpStatusCode from "../enums/HttpStatusCode";

export class ComprarController
{

    public comprarProducto = async ( req : Request, res : Response ) => 
    {
        
        /* Recibimos la cantidad de productos que se desean comprar */
        const cantidad : number = req.body.cantidad;

        /* Recibimos el id del producto comprado */
        const id_producto : number = parseInt( req.params.id );

        /* Buscamos el producto */
        const videoJuegoDB : VideoJuego = await VideoJuego.findOne( {Id_juego : id_producto} );
        const videoJuegoActualzado = videoJuegoDB;

        if ( !videoJuegoDB )
        {
            return res.status( HttpStatusCode.NOT_FOUND ).json({

                ok : false,
                msg : 'El producto no esta disponible'

            })

        }

        /* Verificamos que el producto cuente con la suficiente cantidad en stock para realizar la compra */
        videoJuegoActualzado.Cantidad_stock -= cantidad;

        if ( videoJuegoActualzado.Cantidad_stock < 0)
        {
            return res.status( HttpStatusCode.CONFLICT ).json({

                ok : false,
                msg : 'El video Juego no cuenta con suficientes productos para realizar la compra.'

            })

        }

        /* En caso de pasar todas las validaciones, realizamos el proceso de actualizado */
        const factura = new Compras();
        factura.Fecha_compra = new Date();
        factura.Cantidad_adquirida = cantidad;
        factura.Titulo_juego = videoJuegoDB.Titulo;
        factura.Precio_compra = videoJuegoDB.precio * cantidad;
        

        await Promise.all(
            [ 
                factura.save(),
                videoJuegoActualzado.save()
            ]

        )

        res.json({
            
            ok : true,
            msg : 'Compra registrada',
            factura

        })



    }

    public historicoCompras = async ( req : Request, res : Response ) => 
    {
        
        /* Buscamos las compras registradas en nuestra base de datos */
        const compras = await Compras.find();

        res.json({

            ok : true,
            msg : 'Las compras registradas son :',
            compras

        })
        
    }
}