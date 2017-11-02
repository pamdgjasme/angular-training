import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class BackendService {

  public static TOKEN = 'MIKEE-AUTH-TOKEN';
  // public static TOKEN = 'X-Auth-Token';
  host: string;
  url: string;


  constructor(public http: HttpClient) {
    // this.host = 'http://192.168.1.133:3000';
    this.host = "http://localhost:2000";
    this.url = `${this.host}/api/v1/users/${this.getUserId()}/things`;
  }


  public getHeader(): HttpHeaders {
    let headerObj = {};
    headerObj[BackendService.TOKEN] =  localStorage.getItem('X-Auth-Token');

    return new HttpHeaders(headerObj);
  }

  public getUserId(): string {
    return localStorage.getItem('user_id');
  }

  public deleteThing(id, cb) {
    this.http.delete(
      `${this.url}/${id}`, {headers: this.getHeader()}).subscribe(cb);
  }

  public getThings(cb) {
    this.http.get(this.url,
      {headers: this.getHeader()}).subscribe(cb);
  }

  public addThing(thingToAdd, cb) {
    this.http.post(this.url, thingToAdd,
     { headers: this.getHeader() }).subscribe(cb);
  }

  public saveThing(thingToUpdate, cb) {
    this.http.put(`${this.url}/${thingToUpdate.thing.id}`,
      thingToUpdate, {headers: this.getHeader() }).subscribe(cb);
  }
}
