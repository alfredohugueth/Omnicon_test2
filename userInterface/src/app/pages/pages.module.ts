import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Components */
import { EmpresaComponent } from './listar-empresas/empresa.component';
import { FacturasComponent } from './listar-facturas/facturas.component';
import { JuegosComponent } from './listar-juegos/juegos.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { DetalleEmpresasComponent } from './detalle-empresas/detalle-empresas.component';
import { CrearJuegoComponent } from './crear-juego/crear-juego.component';
import { ComprarComponent } from './comprar/comprar.component';




@NgModule({
  declarations: [
    EmpresaComponent,
    FacturasComponent,
    JuegosComponent,
    PagesComponent,
    DetalleEmpresasComponent,
    CrearJuegoComponent,
    ComprarComponent,
  ],
  exports:[
    EmpresaComponent,
    FacturasComponent,
    JuegosComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
