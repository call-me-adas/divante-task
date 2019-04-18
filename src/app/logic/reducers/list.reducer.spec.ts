import {INITIAL_STATE, reducer} from './list.reducer';
import * as listActions from '../actions/list.action';
import * as fromList from './list.reducer';

describe('list reducer', () => {

    it('should return the initial state', () => {
        // given
        const action = {type: 'UNDEFINED'};
        const initialState = {
          list: [],
          detail: null,
          error: null
        };

        // when
        const result = reducer(undefined, action);

        // then
        expect(result).toEqual(initialState);
    });

    it('should handle FETCH_LIST_SUCCESS', () => {
        const mock = [];
        // when
        const action = new listActions.FetchListSuccess(mock);
        const state = fromList.reducer(INITIAL_STATE, action);
        // then
        expect(state.list).toEqual(mock);
    });

    it('should handle FETCH_DETAIL', () => {
        const mock = {id: 1, title: '', description: '', details: '', image: ''};
        // when
        const action = new listActions.FetchDetail(1);
        const state = fromList.reducer(INITIAL_STATE, action);
        // then
        expect(state.detail).toEqual(mock);
    });


});
