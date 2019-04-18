import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {RouterModule} from '@angular/router';
import {AboutPage} from "@pages/home/about/about.page";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: AboutPage }
        ])
    ],
    declarations: [
      AboutPage
    ],
    exports: []
})
export class AboutModule {
}
