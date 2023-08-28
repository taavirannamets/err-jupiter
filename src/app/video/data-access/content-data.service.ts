import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentDataService {
  baseUrl =
    'https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.baseUrl).pipe(
      catchError((error) => {
        console.error('API request error:', error);
        return EMPTY; // Or return a default value
      })
    );
  }
}
