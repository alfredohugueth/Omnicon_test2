import "reflect-metadata";
import { Connection, createConnection, Repository,  } from "typeorm";
import { Compras } from "./entities/compra.entity";
import { EmpresaDesarrolladora } from "./entities/empresaDesarrolladora.entity";
import { VideoJuego } from "./entities/videoJuego.entity";


export class BaseDatos
{
    public connection : Connection;
    public juegosRepo : Repository<VideoJuego>;
    public empresasRepo : Repository<EmpresaDesarrolladora>;
    public facturasRepo : Repository<Compras>;

     constructor()
    {

        this.inicializarConeccion();

    }

    
    async inicializarConeccion() : Promise<void> 
    {

        this.connection = await this.DbConnection();
        console.log( 'Base de datos conectada');

        /* Inicializamos los repositorios de base de datos */
        this.juegosRepo = this.connection.getRepository( VideoJuego );
        this.empresasRepo = this.connection.getRepository( EmpresaDesarrolladora );
        this.facturasRepo = this.connection.getRepository( Compras );
        
    }

    async DbConnection() : Promise<Connection> 
    {
        try
        
        {

            return createConnection(
                {
                    
                    type : 'mysql',
                    host : process.env.HOST_MYSQL,
                    port : parseInt(process.env.PORT_MYSQL),
                    username : process.env.USERNAME_MYSQL,
                    password : process.env.PASSWORD_MYSQL,
                    database : process.env.DATABASE_NAME,
                    entities : [
                        __dirname + '/entities/*.entity{.ts,.js}'
                    ],
                    migrationsTableName : "tabla_migraciones",
                    migrations : [ __dirname + '/migrations/*.migration{.ts,.js}' ],
                    cli : {
                        "migrationsDir" : __dirname + '/migrations'
                    },
                    synchronize : true,
                    logging : false
                }
            )

        }
        
        catch(err)
        
        {
            console.log(err);
            throw new Error('Error a la hora de iniciar la DB ver logs');
        }

    }

    

    



}



