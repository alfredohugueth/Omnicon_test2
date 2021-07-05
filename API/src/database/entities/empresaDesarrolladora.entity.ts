import { type } from "os";
import { Column, PrimaryGeneratedColumn, Entity, OneToMany, ManyToOne, BaseEntity, JoinColumn } from "typeorm";
import { VideoJuego } from "./videoJuego.entity";

@Entity()
export class EmpresaDesarrolladora extends BaseEntity
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

    @OneToMany( type => VideoJuego, videoJuego => videoJuego.empresa )
    @JoinColumn()
    Titulos_desarrollados : VideoJuego[];
    
}