import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { FacturasComponent } from './facturas/facturas.component';
import { JuegosComponent } from './juegos/juegos.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    
    {
        path : 'products',
        component : PagesComponent,
        children : 
        [
            
            { path : '', component: JuegosComponent },
            { path : 'empresa', component : EmpresaComponent},
            { path : 'factura', component : FacturasComponent}

        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
})
export class PagesRoutingModule { }