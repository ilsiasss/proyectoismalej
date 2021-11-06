import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante.model';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {

  estudiante?: Estudiante[];
  currentEstudiante?: Estudiante;
  currentIndex = -1;
  nombre = '';

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.retrieveEstudiante();
  }
  retrieveEstudiante(): void {
    this.estudianteService.getAll()
      .subscribe(
        data => {
          this.estudiante = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEstudiante();
    this.currentEstudiante = undefined;
    this.currentIndex = -1;
  }

  setActiveEstudiante(estudiante: Estudiante, index: number): void {
    this.currentEstudiante = estudiante;
    this.currentIndex = index;
  }

  removeAllEstudiante(): void {
    this.estudianteService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchNombre(): void {
    this.estudianteService.findByTitle(this.nombre)
      .subscribe(
        data => {
          this.estudiante = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
