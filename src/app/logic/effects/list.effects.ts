import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ListService} from '@logic/services/list/list.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  FETCH_DETAIL,
  FETCH_LIST,
  FetchDetail, FetchDetailSuccess,
  FetchList,
  FetchListFail,
  FetchListSuccess
} from '@logic/actions/list.action';
import {catchError, mergeMap, flatMap, delay} from 'rxjs/operators';
import {ItemModel} from '@logic/models/item.model';

@Injectable()
export class ListEffects {
  @Effect()
  fetchComments$: Observable<Action> = this.actions$
    .pipe(ofType(FETCH_LIST), delay(1000),
      mergeMap((action: FetchList) => {
        return this.listService.getList()
          .pipe(flatMap((res: Array<ItemModel>) => [
              new FetchListSuccess(res)
            ]),
            catchError((error => of(new FetchListFail(error))))
          );
      })
    );

  @Effect()
  fetchDetail$: Observable<Action> = this.actions$
    .pipe(ofType(FETCH_DETAIL),
      mergeMap((action: FetchDetail) => {
        return this.listService.getList()
          .pipe( flatMap((res: Array<ItemModel>) => [
              new FetchListSuccess(res),
              new FetchDetailSuccess(action.payload)
            ]),
            catchError((error => of(new FetchListFail(error))))
          );
      })
    );

    constructor(private actions$: Actions, private listService: ListService) {
    }
}
