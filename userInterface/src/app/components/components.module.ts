import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables/tables.component';



@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [ TablesComponent ]
})
export class ComponentsModule { }
