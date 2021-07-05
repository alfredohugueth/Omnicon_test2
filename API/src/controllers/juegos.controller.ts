
import { Request, Response } from "express";
import { Between, Like } from "typeorm";
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
    
        

    }

    public obtenerJuego = async ( req : Request, res : Response ) => 
    {

        /* buscamos el juego en nuestra base de datos */
        const uid = parseInt( req.params.id );

        const juegoDB : VideoJuego = await VideoJuego.findOne( { Id_juego : uid }, { relations : ['empresa'] } );

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

    public obtenerJuegos = async ( req : Request, res : Response ) => 
    {
        const juegos : VideoJuego[] = await VideoJuego.find( { relations : ['empresa'] } );
        
        res.json({

            ok : true,
            msg : 'lista de video Juegos',
            juegos
            
        })
    }

    async filtrarPorTitulo( req : Request, res : Response )
    {
        const filtro : string = req.body.filtro;
        
        const videoJuego : VideoJuego[] | void = await VideoJuego.find( { Titulo : Like( `%${filtro}%` ) } )
        .catch( ( err ) => {
            console.log( 'Error contacta con el administrador' );
        }); // Usar like 
        
        if ( videoJuego )
        {

            return res.json({
                
                ok : true,
                msg : 'El resultado del filtro fue',
                videoJuego
    
            });

        } 
        return res.json({

            ok : false,
            msg : 'No existe ningun video Juego con este titulo '

        }
        )

    }


    async filtrarPorPlataforma( req : Request, res : Response )
    {
        const filtro : string = req.body.filtro;
        
        const videoJuego : VideoJuego[] | void = await VideoJuego.find( { Plataforma : Like( `%${filtro}%` ) } )
        .catch( ( err ) => {
            console.log( 'Error contacta con el administrador' );
        }); // Usar like 
        
        if ( videoJuego )
        {

            return res.json({
                
                ok : true,
                msg : 'El resultado del filtro fue',
                videoJuego
    
            });

        } 
        return res.json({

            ok : false,
            msg : 'No existe ningun video Juego con esta plataforma '

        }
    )

        


    }


    async filtrarPorPrecio( req : Request, res : Response )
    {

        const filtro : number = req.body.filtro;
        /* Creamos un rango de precios */
        const rangoSuperior = filtro + filtro * 0.3;
        const rangoInferior = filtro - filtro - 0.3;

        const videoJuego : VideoJuego[] | void = await VideoJuego.find( { precio : Between( rangoInferior, rangoSuperior)  } )
        .catch( ( err ) => {
            console.log( 'Error contacta con el administrador' );
        });  
        
        if ( videoJuego )
        {

            return res.json({
                
                ok : true,
                msg : 'El resultado del filtro fue',
                videoJuego
    
            });

        } 
        return res.json({

            ok : false,
            msg : 'No existe ningun video Juego con estos precios'

        }
    )


    }


    async filtrarPorEmpresa( req : Request, res : Response )
    {

        const filtro : number = req.body.filtro;
        
        const empresa : EmpresaDesarrolladora = await EmpresaDesarrolladora.findOne( { Id_empresa : filtro });

        if  ( !empresa )
        {
            return res.status( HttpStatusCode.NOT_FOUND).json({
                
                ok : false,
                msg : 'No existe ninguna empresa registrada con este nombre'

            })

        }

        const videoJuego : VideoJuego[] | void = await VideoJuego.find( { empresa : empresa } )
        .catch( ( err ) => {
            console.log( 'Error contacta con el administrador' );
        });  
        
        if ( videoJuego )
        {

            return res.json({
                
                ok : true,
                msg : 'El resultado del filtro fue',
                videoJuego
    
            });

        } 
        return res.json({

            ok : false,
            msg : 'No existe ningun video Juego con estos precios'

        }
    )

    }


    
}