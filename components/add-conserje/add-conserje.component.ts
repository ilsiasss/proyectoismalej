import { Component, OnInit } from '@angular/core';
import { Conserje } from 'src/app/models/conserje.model';
import { ConserjeService } from 'src/app/services/conserje.service';

@Component({
  selector: 'app-add-conserje',
  templateUrl: './add-conserje.component.html',
  styleUrls: ['./add-conserje.component.css']
})
export class AddConserjeComponent implements OnInit {
  conserje: Conserje = {
    nombre: '',
    descripcion: ''
  };
  submitted = false;

  constructor(private conserjeService: ConserjeService) { }

  ngOnInit(): void {
  }
  saveConserje(): void {
    const data = {
      nombre: this.conserje.nombre,
      descripcion: this.conserje.descripcion
    };

    this.conserjeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newConserje(): void {
    this.submitted = false;
    this.conserje = {
      nombre: '',
      descripcion: ''
    };
  }
}
