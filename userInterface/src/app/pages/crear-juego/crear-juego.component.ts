import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Empresas } from 'src/app/interfaces/empresas';
import { listarEmpresasResponse } from 'src/app/interfaces/server-responses';
import { EmpresasService } from 'src/app/services/empresas.service';

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

  constructor( private fb : FormBuilder, private empresaService : EmpresasService ) { }
  
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
    

  }

}
