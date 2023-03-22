import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/main/about-me/about-me.component';
import { ExperiencesComponent } from './components/main/experiences/experiences.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { NavComponent } from './components/header/nav/nav.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Añadir metadatos
@NgModule({
  declarations:[
    AppComponent,
    NavComponent,
    AboutMeComponent,
    ExperiencesComponent,
    ProjectsComponent,
    ContactMeComponent,
  ],
  //importación de otros módulos que ofrecen clases usadas en nuestro módulo.
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule
  ],
  schemas:[
    //Este esquema permite la validación de componentes personalizados que se utilizan en el módulo.
    CUSTOM_ELEMENTS_SCHEMA
  ],
  //carga servicios para toda la aplicación y permite que estos se pasen al resto de componentes por inyección de dependencias
  providers: [],
  // define el componente principal para el arranque y se utiliza en el módulo principal (root module).
  bootstrap: [AppComponent],

  

})

export class AppModule {

 }
