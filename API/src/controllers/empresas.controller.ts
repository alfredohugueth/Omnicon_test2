
import { Request, Response } from "express";
import { EmpresaDesarrolladora } from "../database/entities/empresaDesarrolladora.entity";
import HttpStatusCode from "../enums/HttpStatusCode";

export class EmpresasController
{

    public obtenerEmpresa = async ( req : Request, res : Response ) => {

        /* Cambiamos el tipo de variable a numero del id */

        const uid = parseInt(req.params.id);

        /* Buscamos en nuestra base de datos la empresa que cumpla con estas condiciones */

        const empresaDB = await EmpresaDesarrolladora.findOne( { Id_empresa : uid }, { relations : [ 'Titulos_desarrollados' ]} );
        
        if( !empresaDB )
        {
            return res.status( HttpStatusCode.NOT_FOUND ).json({

                ok : false,
                msg : 'No se encontró ninguna empresa con este Id.',
                uid
          
            })
        } 
        else
        {

            res.json({
    
                ok : true,
                msg : 'La empresa Obtenida fue la siguiente',
                empresaDB
                
            })

        }

    }

    public crearEmpresa = async ( req : Request, res : Response ) => 
    {

        /* Creamos la empresa */

        const { nombre, descripcion, fecha_inicio_operacion, nit } = req.body

        const empresa : EmpresaDesarrolladora = new EmpresaDesarrolladora();
        empresa.Nombre = nombre;
        empresa.Descripcion = descripcion;
        empresa.Inicio_actividades = fecha_inicio_operacion;
        empresa.NIT = nit;

        await empresa.save();

        
        res.json({

            ok : true,
            msg : 'Empresa Creada',
            empresa
            
        })

    }

    public listarEmpresas = async ( req : Request, res : Response ) => {
        
        const empresasDB = await EmpresaDesarrolladora.find();

        res.json({
            
            ok : true,
            msg : 'Lista de empresas disponibles',
            empresasDB

        })
    }
    
}