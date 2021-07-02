import { Column, PrimaryGeneratedColumn, Entity, BaseEntity } from "typeorm";

@Entity()
export class Compras extends BaseEntity
{

    @PrimaryGeneratedColumn()
    Id_compra : number;

    @Column()
    Fecha_compra : Date;

    @Column()
    Cantidad_adquirida : number;

    @Column()
    Titulo_juego : string;

    @Column()
    Precio_compra : number;
    
}