import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TheatreService {
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';

  constructor(private http: HttpClient) {}

  public getData(key: string): Observable<string> {
    return this.http.get<string>(`${this.URL}get?key=${key}`);
  }

  public setData(key: string, teatro: any[]): Observable<string> {
    return this.http.post<string>(`${this.URL}set?key=${key}`, teatro);
  }

  public newData(): Observable<string> {
    return this.http.get<string>(`${this.URL}new?secret=ssw2022`);
  }
}
