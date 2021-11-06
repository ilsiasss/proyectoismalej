import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante.model';

@Component({
  selector: 'app-estudiante-details',
  templateUrl: './estudiante-details.component.html',
  styleUrls: ['./estudiante-details.component.css']
})
export class EstudianteDetailsComponent implements OnInit {
  currentEstudiante: Estudiante = {
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: ''
  };
  message = '';


  constructor(
    private estudianteService: EstudianteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getEstudiante(this.route.snapshot.params.id);
  }
  getEstudiante(id: string): void {
    this.estudianteService.get(id)
      .subscribe(
        data => {
          this.currentEstudiante = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  

  updateEstudiante(): void {
    this.estudianteService.update(this.currentEstudiante.id, this.currentEstudiante)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteEstudiante(): void {
    this.estudianteService.delete(this.currentEstudiante.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/estudiante']);
        },
        error => {
          console.log(error);
        });
  }
}
