import { Component, OnInit } from '@angular/core';
import { ConserjeService } from 'src/app/services/conserje.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Conserje } from 'src/app/models/conserje.model';

@Component({
  selector: 'app-conserje-details',
  templateUrl: './conserje-details.component.html',
  styleUrls: ['./conserje-details.component.css']
})
export class ConserjeDetailsComponent implements OnInit {
  currentConserje: Conserje = {
    nombre: '',
    descripcion: ''
  };
  message = '';

  constructor(
    private conserjeService: ConserjeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getConserje(this.route.snapshot.params.id);
  }
  getConserje(id: string): void {
    this.conserjeService.get(id)
      .subscribe(
        data => {
          this.currentConserje = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  

  updateConserje(): void {
    this.conserjeService.update(this.currentConserje.id, this.currentConserje)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteConserje(): void {
    this.conserjeService.delete(this.currentConserje.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/conserje']);
        },
        error => {
          console.log(error);
        });
  }
}
