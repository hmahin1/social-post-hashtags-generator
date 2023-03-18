import { Injectable } from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { BehaviorSubject, forkJoin, map, Observable, of }  from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  generateHashtags(hashtagObj:Object): Observable<any> {
    return this.http.post(`${this.baseUrl}generateHashtags` , hashtagObj );
}
generatePost(postObj:Object): Observable<any>{
  return this.http.post(`${this.baseUrl}generatePost` , postObj );
}
}
