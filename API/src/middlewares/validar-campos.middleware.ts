import { NextFunction, Request, RequestHandler, Response } from "express";
import { validationResult } from "express-validator";
import { Middleware } from "express-validator/src/base";
import { type } from "os";
import HttpStatusCode from "../enums/HttpStatusCode";


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

  const fecha = new Date( req.body.fecha_inicio_operacion ).getTime();

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

