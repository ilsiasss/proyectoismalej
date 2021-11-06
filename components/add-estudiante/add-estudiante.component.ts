import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante.model';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-add-estudiante',
  templateUrl: './add-estudiante.component.html',
  styleUrls: ['./add-estudiante.component.css']
})
export class AddEstudianteComponent implements OnInit {
  estudiante: Estudiante = {
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: ''
  };
  submitted = false;

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {
  }
  saveEstudiante(): void {
    const data = {
      nombre: this.estudiante.nombre,
      apellido: this.estudiante.apellido,
      direccion: this.estudiante.direccion,
      telefono: this.estudiante.telefono
    };

    this.estudianteService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEstudiante(): void {
    this.submitted = false;
    this.estudiante = {
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: ''
    };
  }

}
