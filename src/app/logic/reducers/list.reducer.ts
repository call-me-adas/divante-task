import {FETCH_LIST_SUCCESS, FETCH_DETAIL} from '@logic/actions/list.action';
import {ItemModel} from "@logic/models/item.model";

export interface State {
    list: Array<ItemModel>;
    detail: ItemModel;
    error: any;
}

export const INITIAL_STATE: State = {
    list: [],
    detail: null,
    error: null
};


export function reducer(state: State = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_LIST_SUCCESS: {
            return {
                ...state,
              list: action.payload
            };
        }

        case FETCH_DETAIL: {
            return {
                ...state,
              detail: state.list.find(x => x.id === action.payload)
            };
        }

        default: {
            return state;
        }
    }
}

export const getList = (state) => state.list;
export const getDetail = (state) => state.detail;
