import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TheatreService {
  //usato per costruire l'url finale
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/'; 

  constructor(private http: HttpClient) {}

  /**
   * getData preleva con una get dall'URL definito prima unito alla stringa get?key=...
   */
  public getData(key: string): Observable<string> {
    return this.http.get<string>(`${this.URL}get?key=${key}`);
  }
/**
   * setData modifica con il metodo post dall'URL definito prima unito alla stringa set?key=...
   */
  public setData(key: string, teatro: any[]): Observable<string> {
    return this.http.post<string>(`${this.URL}set?key=${key}`, teatro);
  }
/**
   * newData preleva con una get dall'URL definito prima un codice che rappresenta un nuovo spettacolo
   */
  public newData(): Observable<string> {
    return this.http.get<string>(`${this.URL}new?secret=ssw2022`);
  }
}
