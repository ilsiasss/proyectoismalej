import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conserje } from '../models/conserje.model';

const baseUrl = 'http://localhost:8080/api/conserje';

@Injectable({
  providedIn: 'root'
})
export class ConserjeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Conserje[]> {
    return this.http.get<Conserje[]>(baseUrl);
  }

  get(id: any): Observable<Conserje> {
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

  findByNombre(nombre: any): Observable<Conserje[]> {
    return this.http.get<Conserje[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
