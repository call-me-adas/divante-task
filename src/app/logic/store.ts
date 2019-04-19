import * as fromList from '@logic/reducers/list.reducer';
import * as fromCart from '@logic/reducers/cart.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface AppState {
    list: fromList.State;
    cart: fromCart.State;
}

export const reducers: ActionReducerMap<AppState> = {
    list: fromList.reducer,
    cart: fromCart.reducer
};

/* MAIN SELECTORS */
export const getListState = createFeatureSelector<AppState>('list');
export const getCartState = createFeatureSelector<AppState>('cart');

/* List */
export const getloading = createSelector(getListState, fromList.getloading);
export const getList = createSelector(getListState, fromList.getList);
export const getDetail = createSelector(getListState, fromList.getDetail);

/* Article  */
export const getCartList = createSelector(getCartState, fromCart.getList);

