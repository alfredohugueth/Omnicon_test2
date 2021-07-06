import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './comprar/comprar.component';
import { CrearJuegoComponent } from './crear-juego/crear-juego.component';
import { DetalleEmpresasComponent } from './detalle-empresas/detalle-empresas.component';
import { EmpresaComponent } from './listar-empresas/empresa.component';
import { FacturasComponent } from './listar-facturas/facturas.component';
import { JuegosComponent } from './listar-juegos/juegos.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    
    {
        path : 'products',
        component : PagesComponent,
        children : 
        [
            
            
            { path : '', component: JuegosComponent },
            { path : 'empresa', component : EmpresaComponent},
            { path : 'factura', component : FacturasComponent},
            { path : 'detalles-empresa', component: DetalleEmpresasComponent},
            { path : 'crear-juego', component : CrearJuegoComponent},
            

        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
})
export class PagesRoutingModule { }