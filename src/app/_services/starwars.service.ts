import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Planets } from '../_models/Planets';
import { Observable } from 'rxjs';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Injectable()
export class StarWarsService {
  constructor(private http: HttpClient) {}

  planetData: Planets;
  baseUrl = environment.apiUrl;

  getPlanets(): Observable<any> {
    // console.log('gettingPlanets');
    // const data: any = this.http.get<Planets[]>(this.baseUrl + '/planets' ).subscribe((result: any) => {
    //   result = this.planetData;
    // });
    // return data.results;
    return this.http.get(this.baseUrl + '/planets' );
  }

  getFilms(): Observable<any> {
    return this.http.get(this.baseUrl + '/films');
  }
}
