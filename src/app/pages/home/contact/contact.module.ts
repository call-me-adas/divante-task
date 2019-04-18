import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {RouterModule} from '@angular/router';
import {ContactPage} from "@pages/home/contact/contact.page";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: ContactPage }
        ])
    ],
    declarations: [
        ContactPage
    ],
    exports: []
})
export class ContactModule {
}
