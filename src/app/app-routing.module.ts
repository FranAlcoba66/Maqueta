import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducacionComponent } from './components/educacion/educacion.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  
  { path: 'editar', component: EducacionComponent  },
  
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
