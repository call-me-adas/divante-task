import {Action} from '@ngrx/store';
import {ItemModel} from '@logic/models/item.model';

export const FETCH_DETAIL = '[List] FETCH_DETAIL';

export const FETCH_LIST = '[List] FETCH_NEWS';
export const FETCH_LIST_SUCCESS = '[List] FETCH_NEWS_SUCCESS';
export const FETCH_LIST_FAIL = '[List] FETCH_NEWS_FAIL';

export class FetchList implements Action {
    readonly type = FETCH_LIST;

    constructor() {
    }
}

export class FetchListSuccess implements Action {
    readonly type = FETCH_LIST_SUCCESS;

    constructor(public payload: Array<ItemModel>) {
    }
}

export class FetchListFail implements Action {
    readonly type = FETCH_LIST_FAIL;

    constructor(public payload) {
    }
}


export class FetchDetail implements Action {
  readonly type = FETCH_DETAIL;

  constructor(public payload: number) {
  }
}


export type Actions =
    | FetchDetail
    | FetchList
    | FetchListSuccess
    | FetchListFail;
