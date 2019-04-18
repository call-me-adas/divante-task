import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {RouterModule} from '@angular/router';
import {HomePage} from '@pages/home/home.page';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot([
            { path: '', loadChildren: './list/list.module#ListModule'},
            { path: 'about', loadChildren: './about/about.module#AboutModule'},
            { path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
            { path: 'detail/:id', loadChildren: './detail/detail.module#DetailModule'},
        ])
    ],
    declarations: [
        HomePage,
    ],
    exports: [
        HomePage
    ]
})
export class HomeModule {
}
