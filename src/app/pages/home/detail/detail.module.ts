import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {RouterModule} from '@angular/router';
import {DetailPage} from "@pages/home/detail/detail.page";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: DetailPage }
        ])
    ],
    declarations: [
        DetailPage
    ],
    exports: []
})
export class DetailModule {
}
