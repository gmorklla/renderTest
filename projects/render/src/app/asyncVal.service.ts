import { Injectable } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

export interface UserI {
  name: string;
  email: string;
}

@Injectable()
export class AsyncValService {
  constructor(private http: HttpClient) {}

  checkEmailNotTaken(email: string) {
    return this.http.get('assets/users.json').pipe(
      debounceTime(1000),
      map((users: Array<UserI>) => users.filter(user => user.email === email)),
      map(users => !users.length)
    );
  }
}
