import { Component, OnInit } from '@angular/core';
import { MaestroService } from 'src/app/services/maestro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Maestro } from 'src/app/models/maestro.model';

@Component({
  selector: 'app-maestro-details',
  templateUrl: './maestro-details.component.html',
  styleUrls: ['./maestro-details.component.css']
})
export class MaestroDetailsComponent implements OnInit {
  currentMaestro: Maestro = {
    nombre: '',
    direccion: '',
    telefono: ''
  };
  message = '';

  constructor(
    private maestroService: MaestroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getMaestro(this.route.snapshot.params.id);
  }
  getMaestro(id: string): void {
    this.maestroService.get(id)
      .subscribe(
        data => {
          this.currentMaestro = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  

  updateMaestro(): void {
    this.maestroService.update(this.currentMaestro.id, this.currentMaestro)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteMaestro(): void {
    this.maestroService.delete(this.currentMaestro.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/maestro']);
        },
        error => {
          console.log(error);
        });
  }
}
