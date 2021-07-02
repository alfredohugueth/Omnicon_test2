import { NextFunction, Request, RequestHandler, Response } from "express";
import { validationResult } from "express-validator";
import { Middleware } from "express-validator/src/base";
import { type } from "os";
import HttpStatusCode from "../enums/HttpStatusCode";
import { TipoFiltroJuegos } from "../enums/tiposFiltroVideoJuegos";


export const validarCampos : Middleware = ( req : Request, res: Response, next:NextFunction ) =>  {

    /* Errores de ruta */
  const errores = validationResult( req );
  if ( !errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        })
  }

  next()

}

export const validarFechaCrearEmpresa : Middleware = ( req : Request, res : Response, next : NextFunction ) => 
{

  const fecha = convertirFecha( req.body.fecha_inicio_operacion );

  if ( fecha === NaN )
  {

    return res.status( HttpStatusCode.BAD_REQUEST ).json({

      ok : false,
      msg : 'El formato de la fecha no es valido '

    })
  }

  next();

}

export const verificarID : Middleware = ( req : Request, res : Response, next : NextFunction ) =>
{

  const uid = parseInt( req.params.id );


  if ( isNaN( uid ) )
  {

    return res.status( HttpStatusCode.BAD_REQUEST ).json({

      ok : false,
      msg : 'Ingresa un id en formato de número.'

    })
  
  }

  next();

  
}

export const validarFechaCrearVideoJuego : Middleware = ( req : Request, res : Response, next : NextFunction ) => 
{

  const fecha = convertirFecha( req.body.fecha_salida );

  if ( fecha === NaN )
  {

    return res.status( HttpStatusCode.BAD_REQUEST ).json({

      ok : false,
      msg : 'El formato de la fecha no es valido '

    })
  }

  next();

}

function convertirFecha ( fecha )
{
  
  return new Date( fecha ).getTime();;

}

export const validarTipoFiltro : Middleware = ( req : Request, res : Response, next : NextFunction ) =>
{

  /* Verificamos el tipo de filtro que se desea realizar */

  const metodoFiltro = parseInt( req.params.metodo );

  if ( isNaN( metodoFiltro ) || (metodoFiltro < TipoFiltroJuegos.Titulo && metodoFiltro > TipoFiltroJuegos.Empresa) )
  {
    /* El usuario ingreso un metodo no valido */
    res.status( HttpStatusCode.BAD_REQUEST ).json({
      
      ok : false,
      msg : 'El metodo de filtro debe ser 1: Titulo, 2: Plataforma, 3: Precio, 4: Empresa '

    });

  } 
  
  next();

}

