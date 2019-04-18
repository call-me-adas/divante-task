import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const routes = {
  getList: () => `./assets/database.json`
};

@Injectable({ providedIn: 'root' })
export class ListService {
  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Object> {
    return this.httpClient.get(routes.getList());
  }
}
