

import { Router } from "express";
import { check } from "express-validator";
import { EmpresasController } from "../controllers/empresas.controller";
import { validarCampos, validarFechaCrearEmpresa, verificarID } from "../middlewares/validar-campos.middleware";


const router = Router();
const empresaController = new EmpresasController();


/* 

    Ruta : api/empresas

*/

/* Obtener Empresa */
router.get( '/:id', verificarID ,empresaController.obtenerEmpresa );

/* Crear Empresa */
router.post( '/crear',
[
    
    check( 'nombre', 'El nombre de la empresa es obligatorio' ).not().isEmpty(),
    check( 'descripcion', 'La descripción de la empresa es obligatoria' ).not().isEmpty(),
    check( 'fecha_inicio_operacion', 'Es necesario saber la fecha en la que empezó a operar la empresa' ).not().isEmpty(),
    check( 'nit', 'El NIT de la empresa es obligatorio' ).not().isEmpty(),
    validarCampos,
    validarFechaCrearEmpresa

] 
, empresaController.crearEmpresa );


export default router;



