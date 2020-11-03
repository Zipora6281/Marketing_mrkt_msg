import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Message} from '../models/message'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private url=environment.base_url+"message";
  constructor(private http:HttpClient) {}
  getAllMessages():Observable<Message>{
  return this.http.get<Message>(this.url);
  }
  editMessage(id:number,message:Message){
    const url=`this.url\{$id}`;
    return this.http.put<Message>(url,Message );
  }
 

}
