import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = `${environment.apiUrl}`

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
  
    return this.http.get<any>(`${this.url}pokemon/?limit=100`);

  }

  getPokemon(id: number): Observable<any> {
     return this.http.get<any>(`${this.url}pokemon/${id}`);
  }

  getImage(id:number): Observable<any> {
    return this.http.get<any>(`${this.url}pokemon-form/${id}`);
  }
}
