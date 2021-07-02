import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Compras
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