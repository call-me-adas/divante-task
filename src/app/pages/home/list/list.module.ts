import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {RouterModule} from '@angular/router';
import {ListPage} from '@pages/home/list/list.page';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
          {path: '', component: ListPage }
        ])
    ],
    declarations: [
        ListPage
    ],
    exports: []
})
export class ListModule {
}
