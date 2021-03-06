import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState, getDetail} from '@logic/store';
import {FetchDetail} from '@logic/actions/list.action';
import {ItemModel} from '@logic/models/item.model';
import {AddProduct} from '@logic/actions/cart.action';

@Component({
    selector: 'page-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss']
})

export class DetailPage implements OnInit, OnDestroy {
    public parametersObservable: Subscription;
    public detail$: Observable<ItemModel>;

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

    addToCart(val: ItemModel) {
      this.store.dispatch(new AddProduct(val));
    }
}
