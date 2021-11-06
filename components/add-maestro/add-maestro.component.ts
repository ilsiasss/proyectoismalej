import { Component, OnInit } from '@angular/core';
import { Maestro } from 'src/app/models/maestro.model';
import { MaestroService } from 'src/app/services/maestro.service';

@Component({
  selector: 'app-add-maestro',
  templateUrl: './add-maestro.component.html',
  styleUrls: ['./add-maestro.component.css']
})
export class AddMaestroComponent implements OnInit {
  maestro: Maestro = {
    nombre: '',
    direccion: '',
    telefono: ''
  };
  submitted = false;

  constructor(private maestroService: MaestroService) { }

  ngOnInit(): void {
  }
  saveMaestro(): void {
    const data = {
      nombre: this.maestro.nombre,
      direccion: this.maestro.direccion,
      telefono: this.maestro.telefono
    };

    this.maestroService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newMaestro(): void {
    this.submitted = false;
    this.maestro = {
      nombre: '',
      direccion: '',
      telefono: ''
    };
  }
}
