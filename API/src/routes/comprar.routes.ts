

import { Router } from "express";
import { check } from "express-validator";
import { ComprarController } from "../controllers/comprar.controller";
import { verificarID } from "../middlewares/validar-campos.middleware";


const router = Router();
const comprarController = new ComprarController();


/* 

    Ruta : api/factura

*/

/* Obtener Comprar producto */
router.put( '/comprar/:id', verificarID, comprarController.comprarProducto );

/* Obtener histórico de compras*/
router.get( '/historico', comprarController.historicoCompras );


export default router;



