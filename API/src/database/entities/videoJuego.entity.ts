
import { type } from "os";
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany } from "typeorm";
import { EmpresaDesarrolladora } from "./empresaDesarrolladora.entity";

@Entity()
export class VideoJuego
{

    @PrimaryGeneratedColumn()
    Id_juego : number;

    @Column()
    Titulo : string;

    @Column()
    Cantidad_stock : number;

    
    @Column()
    Fecha_salida : Date;
    
    @Column()
    Plataforma : string;
    
    @Column()
    precio : number;

    /* Relación entre tablas */
    @ManyToOne( type => EmpresaDesarrolladora, empresa => empresa.Nombre ) 
    empresa : EmpresaDesarrolladora;

}
