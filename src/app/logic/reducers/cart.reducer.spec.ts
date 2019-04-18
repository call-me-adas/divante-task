import {INITIAL_STATE, reducer} from './cart.reducer';
import * as cartActions from '../actions/cart.action';
import * as fromCart from './cart.reducer';

describe('comments reducer', () => {

    it('should return the initial state', () => {
        // given
        const action = {type: 'UNDEFINED'};
        const initialState = {
          list: []
        };

        // when
        const result = reducer(undefined, action);

        // then
        expect(result).toEqual(initialState);
    });

    it('should handle ADD_PRODUCT', () => {
        const mock = {id: 1, title: '', description: '', details: '', image: ''};
        // when
        const action = new cartActions.AddProductSuccess(mock);
        const state = fromCart.reducer(INITIAL_STATE, action);
        // then
        expect(state.list).toBeFalsy(mock);
    });

});
