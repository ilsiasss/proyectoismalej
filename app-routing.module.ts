import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component';
import { EstudianteDetailsComponent } from './components/estudiante-details/estudiante-details.component';
import { AddEstudianteComponent } from './components/add-estudiante/add-estudiante.component';
import { MaestroListComponent } from './components/maestro-list/maestro-list.component';
import { MaestroDetailsComponent } from './components/maestro-details/maestro-details.component';
import { AddMaestroComponent } from './components/add-maestro/add-maestro.component';

import { ConserjeListComponent } from './components/conserje-list/conserje-list.component';
import { ConserjeDetailsComponent } from './components/conserje-details/conserje-details.component';
import { AddConserjeComponent } from './components/add-conserje/add-conserje.component';

const routes: Routes = [
  { path: '', redirectTo: 'estudiante', pathMatch: 'full' },
  { path: 'estudiante', component: EstudianteListComponent },
  { path: 'estudiante/:id', component: EstudianteDetailsComponent },
  { path: 'addEstudiante', component: AddEstudianteComponent },

  { path: '', redirectTo: 'maestro', pathMatch: 'full' },//en caso de que no funcione eliminar este
  { path: 'maestro', component: MaestroListComponent },
  { path: 'maestro/:id', component: MaestroDetailsComponent },
  { path: 'addMaestro', component: AddMaestroComponent },


  { path: '', redirectTo: 'conserje', pathMatch: 'full' },
  { path: 'conserje', component: ConserjeListComponent },
  { path: 'conserje/:id', component: ConserjeDetailsComponent },
  { path: 'addConserje', component: AddConserjeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
