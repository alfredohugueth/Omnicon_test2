

import { Router } from "express";
import { check } from "express-validator";
import { JuegosController } from "../controllers/juegos.controller";
import { validarCampos, validarFechaCrearVideoJuego, validarTipoFiltro, verificarID } from "../middlewares/validar-campos.middleware";


const router = Router();
const juegosController = new JuegosController();


/* 

    Ruta : api/juegos

*/

/* Registrar Juego */
router.post( '/registrar',
[
    
    check( 'titulo', 'El Titulo del video juego es necesario' )
    .not().isEmpty(),
    check( 'cantidad_stock', 'Es necesario saber la cantidad de unidades disponibles' )
    .not().isEmpty(),
    check( 'fecha_salida', 'Es necesaria la fecha de estreno del video juego' )
    .not().isEmpty(),
    check( 'plataforma', 'Es necesario saber la plataforma en la que esta diseñado el video juego')
    .not().isEmpty(),
    check( 'precio', 'Es necesario saber el precio del video juego' )
    .not().isEmpty(),
    check( 'empresa', 'Es necesario el id de la empresa que creo el video Juego')
    .not().isEmpty(),
    validarCampos,
    validarFechaCrearVideoJuego

] 
,juegosController.registrarJuegos );

/* Filtrar Juego */
router.get( '/filtrar/:metodo', 
[
    
    validarTipoFiltro,
    check( 'filtro', 'No hay ningún parámetro de búsqueda ').not().isEmpty(),
    validarCampos
    
], juegosController.filtrarJuego );

/* Obtener Juego */
router.get( '/:id', verificarID ,juegosController.obtenerJuego );

/* Listar juegos */
router.get( '/listar/juegos', juegosController.obtenerJuegos );


export default router;



