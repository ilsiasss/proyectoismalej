import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maestro } from '../models/maestro.model';

const baseUrl = 'http://localhost:8080/api/maestro';

@Injectable({
  providedIn: 'root'
})
export class MaestroService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Maestro[]> {
    return this.http.get<Maestro[]>(baseUrl);
  }

  get(id: any): Observable<Maestro> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(nombre: any): Observable<Maestro[]> {
    return this.http.get<Maestro[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
