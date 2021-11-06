import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEstudianteComponent } from './components/add-estudiante/add-estudiante.component';
import { EstudianteDetailsComponent } from './components/estudiante-details/estudiante-details.component';
import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddMaestroComponent } from './components/add-maestro/add-maestro.component';
import { MaestroDetailsComponent } from './components/maestro-details/maestro-details.component';
import { MaestroListComponent } from './components/maestro-list/maestro-list.component';

import { AddConserjeComponent } from './components/add-conserje/add-conserje.component';
import { ConserjeDetailsComponent } from './components/conserje-details/conserje-details.component';
import { ConserjeListComponent } from './components/conserje-list/conserje-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEstudianteComponent,
    EstudianteDetailsComponent,
    EstudianteListComponent,
    AddMaestroComponent,
    MaestroDetailsComponent,
    MaestroListComponent,
    
    AddConserjeComponent,
    ConserjeDetailsComponent,
    ConserjeListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
