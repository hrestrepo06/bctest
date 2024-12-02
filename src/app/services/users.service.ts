import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interface/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl:string = 'https://jsonplaceholder.typicode.com/users';
  http = inject(HttpClient);

  constructor() { }

  // Funcion para obtener los usuarios de la Api
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
