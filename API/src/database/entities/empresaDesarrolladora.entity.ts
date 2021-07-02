import { type } from "os";
import { Column, PrimaryGeneratedColumn, Entity, OneToMany, ManyToOne } from "typeorm";
import { VideoJuego } from "./videoJuego.entity";

@Entity()
export class EmpresaDesarrolladora
{

    @PrimaryGeneratedColumn()
    Id_empresa : number;

    @Column()
    Nombre : string;

    @Column()
    Descripcion : string;

    @Column()
    Inicio_actividades : Date;

    @Column()
    NIT : number;

    @OneToMany( type => VideoJuego, videoJuego => videoJuego.Titulo )
    Titulos_desarrollados : VideoJuego[];
    
}