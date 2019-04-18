import {ADD_PRODUCT} from "@logic/actions/cart.action";

export interface State {
  list: Array<any>;
}

export const INITIAL_STATE: State = {
  list: []
};


export function reducer(state: State = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        list: [...state.list, ...action.payload]
      };
    }

    default: {
      return state;
    }
  }
}

export const getList = (state) => state.list;
