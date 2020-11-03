import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Industy } from '../models/industry'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndustyService {
  private url=environment.base_url+"industry";
  constructor(private http:HttpClient) { }

  getAllIndustrties():Observable<Industy[]>{
    return this.http.get<Industy[]>(this.url);
  }

}
