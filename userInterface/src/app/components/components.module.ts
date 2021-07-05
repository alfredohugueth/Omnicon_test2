import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables/tables.component';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [
    TablesComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [ 
    TablesComponent,
    DetallesComponent ]
})
export class ComponentsModule { }
