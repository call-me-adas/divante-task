import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {FetchList} from '@logic/actions/list.action';
import {ItemModel} from '@logic/models/item.model';
import {AppState, getList} from '@logic/store';

@Component({
    selector: 'page-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss']
})

export class ListPage implements OnInit, OnDestroy {
    public parametersObservable: Subscription;
    private list$: Observable<ItemModel>;

    constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

    ngOnInit() {
        this.parametersObservable = this.route.params.subscribe(() => {
            this.store.dispatch(new FetchList());

            this.list$ = this.store.pipe(select(getList));
        });
    }

    public ngOnDestroy(): void {
        this.parametersObservable.unsubscribe();
    }

}
