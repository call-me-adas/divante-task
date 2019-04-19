import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from '@shared/material.module';
import {LoaderComponent} from '@components/loader/loader.component';
import {HeaderComponent} from '@components/header/header.component';
import {CartComponent} from '@components/cart/cart.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        RouterModule,
    ],
    declarations: [
        LoaderComponent,
        HeaderComponent,
        CartComponent
    ],
    exports: [
        CommonModule,
        LoaderComponent,
        HeaderComponent,
        CartComponent,
        MaterialModule
    ]
})
export class SharedModule {
}
