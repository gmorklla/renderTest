import { Injectable } from '@angular/core';
import { debounceTime, map, delay } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

export interface UserI {
  name: string;
  email: string;
}

@Injectable()
export class AsyncValService {
  constructor(private http: HttpClient) {}

  checkEmailNotTaken(email) {
    return this.http.get('assets/users.json').pipe(
      delay(1000),
      map((users: Array<UserI>) =>
        users.filter(user => user.email === email.value)
      ),
      map(users => !users.length),
      map(res => (res ? null : { duplicate: 'Email ya registrado' }))
    );
  }

  validCard(card: number) {
    return of(Math.round(Math.random())).pipe(
      delay(1000),
      map(res => (res ? null : { invalidCard: true }))
    );
  }

  asynCallToService(url: string) {
    return this.http.get(url);
  }
}
