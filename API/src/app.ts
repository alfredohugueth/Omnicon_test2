/* Server Imports */

import express, { Application, RequestHandler } from "express";
import Http from "http";
import debug from "debug";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import cors from "cors";

/* Database Imports */
import { BaseDatos } from './database/BaseDatos.connection'


/* Router Imports */

import juegosRouter  from "./routes/juegos.routes";
import empresasRouter  from "./routes/empresas.routes";
import comprarRouter from "./routes/comprar.routes";


/* Interfaces Imports */






let server:Http.Server

export class App
{
    
  public app:Application;
  public port:Number | Boolean | String;
      
    constructor() 
    {

        /* Env variables configuration */
        dotenv.config();
        this.port = '';
        this.app = express();
        this.middleware();
        this.routes();
        new BaseDatos();
        this.ServeApi();
                
        
    }
    

    /* middleware of the server */

    middleware()
    {

      /* Configurar CORS*/
      this.app.use(cors());
      this.app.use(logger('dev') as RequestHandler);
      /* Lectura y parseo del body */
      this.app.use(express.json() as RequestHandler);
      this.app.use(express.urlencoded({ extended: false}) as RequestHandler);
      this.app.use(cookieParser());
      
        
        
        
    }

    /* Routes of the server */
    routes()
    {
      
      this.app.use( '/api/juegos', juegosRouter );
      this.app.use( '/api/empresas', empresasRouter );
      this.app.use( '/api/factura', comprarRouter );

    }


    /* Configuration of web server */
    ServeApi()
    {

         this.port = this.normalizePort(process.env.PORT || '3000');
         this.app.set('port',this.port);
         server = Http.createServer(this.app);
         server.listen(this.port);
         server.on('error',this.onError);
         server.on('listening',this.onListening);




    }

    /* Functions for initialize the server */
    normalizePort(val:string)
    {

        var port = parseInt(val);
        if (isNaN(port)) {
            // named pipe
            return val;
        }
        if(port>=0){
             return port;
        }

        return false
    }


    /* Event listener for HTTP server 'Errors" event*/
    onError(error:any)
    {

        if (error.syscall !== 'listen') {
            throw error;
          }
        
          var bind = typeof this.port === 'string'
            ? 'Pipe ' + this.port
            : 'Port ' + this.port;
        
          // handle specific listen errors with friendly messages
          switch (error.code) {
            case 'EACCES':
              console.error(bind + ' requires elevated privileges');
              process.exit(1);
              break;
            case 'EADDRINUSE':
              console.error(bind + ' is already in use');
              process.exit(1);
              break;
            default:
              throw error;
          }

    }

    /* Event listener for HTTP server 'Listening' event */

    onListening()
    {
        var addr = server.address();
        var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
        debug('Listening on ' + bind);
        console.log('Listening on ' +bind);
    }


}