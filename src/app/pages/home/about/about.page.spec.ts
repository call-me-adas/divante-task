import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@shared/core.module';
import { SharedModule } from '@shared/shared.module';
import {AboutPage} from '@pages/home/about/about.page';

describe('AboutPage', () => {
    let component: AboutPage;
    let fixture: ComponentFixture<AboutPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                SharedModule,
                RouterTestingModule,
                ReactiveFormsModule,
                CoreModule
            ],
            declarations: [AboutPage]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutPage);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

