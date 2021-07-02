
import { Request, Response } from "express";
import { EmpresaDesarrolladora } from "../database/entities/empresaDesarrolladora.entity";
import { VideoJuego } from "../database/entities/videoJuego.entity";
import HttpStatusCode from "../enums/HttpStatusCode";
import { TipoFiltroJuegos } from "../enums/tiposFiltroVideoJuegos";


export class JuegosController
{
    
    public registrarJuegos = async ( req : Request, res : Response ) => 
    {
        /* Obtenemos los datos recibidos */
        const { titulo, cantidad_stock, fecha_salida, plataforma, precio, empresa } = req.body;

        /* Verificamos que la empresa mostrada exista en nuestra base de datos */
        const empresaDB = await EmpresaDesarrolladora.findOne( empresa );

        if ( !empresaDB )
        {
            return res.status( HttpStatusCode.NOT_FOUND ).json({

                ok : false,
                msg : 'No se encontró ninguna empresa con este Id.'
          
            });

        }

        /* Creamos el nuevo objeto que almacenaremos en la base de datos */
        const juego = new VideoJuego();
        juego.Titulo = titulo;
        juego.Cantidad_stock = cantidad_stock;
        juego.Fecha_salida = fecha_salida;
        juego.Plataforma = plataforma;
        juego.precio = precio;
        juego.empresa = empresa;

        /* Guardamos en la base de datos */
        await juego.save();

        res.json({
            
            ok : true,
            msg : 'Video Juego Registrado ',
            juego
        
        })    
    }

    public filtrarJuego = async ( req : Request, res : Response ) => 
    {

        /* Verificamos el tipo de filtro deseado por el usuario */

        const filtro = parseInt( req.params.metodo );

        switch (filtro) 
        {
            case TipoFiltroJuegos.Titulo :

                console.log( 'Filtro por Titulo ');
                await this.filtrarPorTitulo( req, res );

            break;

            case TipoFiltroJuegos.Plataforma :
                
                await this.filtrarPorPlataforma( req, res );

            break;

            case TipoFiltroJuegos.Precio :
                
                await this.filtrarPorPrecio( req, res );
            
            break;

            case TipoFiltroJuegos.Empresa :
                
                await this.filtrarPorEmpresa( req, res );
            
            break;
        }
    
        res.json({

            ok : true,
            msg : 'Filtrar Juego'

        })

    }

    public obtenerJuego = async ( req : Request, res : Response ) => 
    {

        /* buscamos el juego en nuestra base de datos */
        const uid = parseInt( req.params.id );

        const juegoDB : VideoJuego = await VideoJuego.findOne( { Id_juego : uid } );

        if ( !juegoDB )
        {
            
            return res.status( HttpStatusCode.NOT_FOUND ).json({

                ok : false,
                msg : 'No se encontró ningún video juego con este Id.',
                uid
          
            })

        } 
        
        res.json({

            ok : true,
            msg : 'El video Juego obtenido fue',
            juegoDB

        })

    }

    async filtrarPorTitulo( req : Request, res : Response )
    {
        const filtro : string = req.body.filtro;
        
        // Creamos una expresión regular para realizar la búsqueda
        const regexFiltro : any = new RegExp( filtro, 'i' );
        console.log( regexFiltro );
        
        const videoJuego : VideoJuego[] = await VideoJuego.find( { Titulo : regexFiltro } );

        res.json({
            
            ok : true,
            msg : 'El resultado del filtro fue',
            videoJuego

        });

    }


    filtrarPorPlataforma( req : Request, res : Response )
    {

        res.json( {msg : 'Filtro por plataforma '});


    }


    filtrarPorPrecio( req : Request, res : Response )
    {

        res.json( {msg : 'Filtro por precio '});

    }


    filtrarPorEmpresa( req : Request, res : Response )
    {

        res.json( {msg : 'Filtro por empresa '});

    }


    
}