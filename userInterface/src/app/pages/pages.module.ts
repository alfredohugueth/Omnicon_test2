import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';

/* Components */
import { EmpresaComponent } from './listar-empresas/empresa.component';
import { FacturasComponent } from './listar-facturas/facturas.component';
import { JuegosComponent } from './listar-juegos/juegos.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { DetalleEmpresasComponent } from './detalle-empresas/detalle-empresas.component';




@NgModule({
  declarations: [
    EmpresaComponent,
    FacturasComponent,
    JuegosComponent,
    PagesComponent,
    DetalleEmpresasComponent,
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
    ComponentsModule
  ]
})
export class PagesModule { }
