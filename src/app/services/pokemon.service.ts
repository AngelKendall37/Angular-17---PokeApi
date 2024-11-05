import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  API_URL: string = 'https://pokeapi.co/api/v2/pokemon?limit=500';

  constructor(private httpClient: HttpClient) {}

  getPokemon(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }
}
