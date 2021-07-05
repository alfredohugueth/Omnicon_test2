import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  listaJuegos! : Juego[];
  juego! : Juego;
  titulosTabla : Array<string> = [ 'Título', 'Cantidad Disponible', 'Fecha Salida', 'Plataforma', 'Precio', 'Empresa', 'Acciones'];

  constructor( private juegoService : VideojuegosService ) { }

  async ngOnInit()  
  {
    this.juegoService.obtenerJuegos()
                      .subscribe( ( resp : Juego[] )  => 
                        {
                          
                          console.log( resp );
                          this.listaJuegos = resp;

                        }
                      )
  }

}
