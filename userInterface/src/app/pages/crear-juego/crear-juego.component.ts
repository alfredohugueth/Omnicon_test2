import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empresas } from 'src/app/interfaces/empresas';
import { listarEmpresasResponse } from 'src/app/interfaces/server-responses';
import { EmpresasService } from 'src/app/services/empresas.service';
import { VideojuegosService } from 'src/app/services/videojuegos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-juego',
  templateUrl: './crear-juego.component.html',
  styleUrls: ['./crear-juego.component.css']
})
export class CrearJuegoComponent implements OnInit {

  public formSubmitted = false;
  public empresasDisponibles! : Empresas[];

  public crearVideoJuego = this.fb.group({
      
      titulo : ['',  Validators.required ],
      cantidad_stock : ['',  Validators.required ],
      fecha_salida : ['',  Validators.required ],
      plataforma : ['',  Validators.required ],
      precio : ['',  Validators.required ],
      empresa : ['Selecciona una empresa', Validators.required ]

  }) 

  constructor( private fb : FormBuilder, 
               private empresaService : EmpresasService, 
               private videoJuegoService : VideojuegosService,
               private router : Router) { }
  
  ngOnInit() {
    this.empresaService.listarEmpresas()
                       .subscribe( (res : Empresas[]) => {
                          console.log( res );
                          this.empresasDisponibles = res;

                       })
  }

  crearJuego()
  {
    
    console.log( 'Se crea el video Juego ');
    this.crearVideoJuego.patchValue( { empresa : parseInt( this.crearVideoJuego.value.empresa) } )

    console.log( this.crearVideoJuego.value );

    /* Creamos el video Juego */
    this.videoJuegoService.crearJuego( this.crearVideoJuego.value )
                          .subscribe( resp => {
                            console.log( resp );
                            Swal.fire({
                              title: 'Video Juego Guardado con exito',
                              confirmButtonText: `aceptar`,
                              icon: 'success'
                            }).then((result) => {
                              
                              if (result.isConfirmed) {
                                this.router.navigateByUrl( '/products' );
                              }

                            })
                          })


    

  }

}
