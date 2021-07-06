import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables/tables.component';
import { DetallesComponent } from './detalles/detalles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TablesComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [ 
    TablesComponent,
    DetallesComponent,
    
   ]
})
export class ComponentsModule { }
