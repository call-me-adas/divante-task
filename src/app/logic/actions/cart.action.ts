import {Action} from '@ngrx/store';
import {ItemModel} from '@logic/models/item.model';

export const ADD_PRODUCT = '[Cart] ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = '[Cart] ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAIL = '[Cart] ADD_PRODUCT_FAIL';

export class AddProduct implements Action {
    readonly type = ADD_PRODUCT;

    constructor(public payload: ItemModel) {
    }
}

export class AddProductSuccess implements Action {
    readonly type = ADD_PRODUCT_SUCCESS;

    constructor(public payload: ItemModel) {
    }
}

export type Actions =
    | AddProduct
    | AddProductSuccess;
