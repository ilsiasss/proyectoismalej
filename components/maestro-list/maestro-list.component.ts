import { Component, OnInit } from '@angular/core';
import { Maestro } from 'src/app/models/maestro.model';
import { MaestroService } from 'src/app/services/maestro.service';

@Component({
  selector: 'app-maestro-list',
  templateUrl: './maestro-list.component.html',
  styleUrls: ['./maestro-list.component.css']
})
export class MaestroListComponent implements OnInit {
  maestro?: Maestro[];
  currentMaestro?: Maestro;
  currentIndex = -1;
  nombre = '';

  constructor(private maestroService: MaestroService) { }

  ngOnInit(): void {
    this.retrieveMaestro();
  }
  retrieveMaestro(): void {
    this.maestroService.getAll()
      .subscribe(
        data => {
          this.maestro = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveMaestro();
    this.currentMaestro = undefined;
    this.currentIndex = -1;
  }

  setActiveMaestro(maestro: Maestro, index: number): void {
    this.currentMaestro = maestro;
    this.currentIndex = index;
  }

  removeAllMaestro(): void {
    this.maestroService.deleteAll()
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
    this.maestroService.findByTitle(this.nombre)
      .subscribe(
        data => {
          this.maestro = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
