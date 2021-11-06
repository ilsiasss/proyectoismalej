import { Component, OnInit } from '@angular/core';
import { Conserje } from 'src/app/models/conserje.model';
import { ConserjeService } from 'src/app/services/conserje.service';

@Component({
  selector: 'app-conserje-list',
  templateUrl: './conserje-list.component.html',
  styleUrls: ['./conserje-list.component.css']
})
export class ConserjeListComponent implements OnInit {
  conserje?: Conserje[];
  currentConserje?: Conserje;
  currentIndex = -1;
  nombre = '';


  constructor(private conserjeService: ConserjeService) { }

  ngOnInit(): void {
    this.retrieveConserje();
  }
  retrieveConserje(): void {
    this.conserjeService.getAll()
      .subscribe(
        data => {
          this.conserje = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveConserje();
    this.currentConserje = undefined;
    this.currentIndex = -1;
  }

  setActiveConserje(conserje: Conserje, index: number): void {
    this.currentConserje = conserje;
    this.currentIndex = index;
  }

  removeAllConserje(): void {
    this.conserjeService.deleteAll()
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
    this.conserjeService.findByNombre(this.nombre)
      .subscribe(
        data => {
          this.conserje = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
