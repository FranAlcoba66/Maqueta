import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalesComponent } from './components/modales/modales.component';
import { FormsModule } from '@angular/forms';

import { EducacionService } from './service/educacion.service';
import { PersonaService } from './service/persona.service';
import { EducacionComponent } from './components/educacion/educacion.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ContactoComponent,
    ProyectosComponent,
    ModalesComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,



  ],
  providers: [EducacionService, PersonaService],
  bootstrap: [AppComponent],

})
export class AppModule { }
