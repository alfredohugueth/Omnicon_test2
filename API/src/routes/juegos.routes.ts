

import { Router } from "express";
import { check } from "express-validator";
import { JuegosController } from "../controllers/juegos.controller";


const router = Router();
const juegosController = new JuegosController();


/* 

    Ruta : api/juegos

*/

/* Registrar Juego */
router.post( '/registrar', juegosController.registrarJuegos );

/* Filtrar Juego */
router.get( '/filtrar/:metodo/:id', juegosController.filtrarJuego );

/* Obtener Juego */
router.get( '/:id', juegosController.obtenerJuego );


export default router;



