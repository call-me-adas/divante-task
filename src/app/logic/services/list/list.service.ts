import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ItemModel} from "@logic/models/item.model";


const routes = {
  getList: () => `./assets/database.json`
};

@Injectable({ providedIn: 'root' })
export class ListService {
  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Array<ItemModel>> {
    return this.httpClient.get<Array<ItemModel>>(routes.getList());
  }
}
