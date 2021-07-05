import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';

/* Components */
import { EmpresaComponent } from './empresa/empresa.component';
import { FacturasComponent } from './facturas/facturas.component';
import { JuegosComponent } from './juegos/juegos.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';




@NgModule({
  declarations: [
    EmpresaComponent,
    FacturasComponent,
    JuegosComponent,
    PagesComponent
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
