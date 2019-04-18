import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState, getDetail} from '@logic/store';
import {FetchDetail} from "@logic/actions/list.action";
import {ItemModel} from "@logic/models/item.model";

@Component({
    selector: 'page-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss']
})

export class DetailPage implements OnInit, OnDestroy {
    public parametersObservable: Subscription;
    private detail$: Observable<ItemModel>;

    constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    }

    ngOnInit() {
        this.parametersObservable = this.route.params.subscribe((res) => {
            this.store.dispatch(new FetchDetail(res.id));

            this.detail$ = this.store.pipe(select(getDetail));
        });
    }

    public ngOnDestroy(): void {
        this.parametersObservable.unsubscribe();
    }

    addToCart(val: number) {
      this.store.dispatch(new FetchDetail(val));
    }
}
