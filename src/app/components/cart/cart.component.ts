import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState, getCartList} from '@logic/store';
import {Observable} from 'rxjs';
import {ItemModel} from '@logic/models/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public list$: Observable<ItemModel>;

  constructor(private store: Store<AppState>) {
    this.list$ = this.store.pipe(select(getCartList));
  }

}
