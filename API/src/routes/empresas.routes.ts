

import { Router } from "express";
import { check } from "express-validator";
import { EmpresasController } from "../controllers/empresas.controller";


const router = Router();
const empresaController = new EmpresasController();


/* 

    Ruta : api/empresas

*/

/* Obtener Empresa */
router.get( '/:id', empresaController.obtenerEmpresa );


export default router;



