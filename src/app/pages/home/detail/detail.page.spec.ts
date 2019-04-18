import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@shared/core.module';
import { SharedModule } from '@shared/shared.module';
import {DetailPage} from "@pages/home/detail/detail.page";

describe('DetailPage', () => {
    let component: DetailPage;
    let fixture: ComponentFixture<DetailPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                SharedModule,
                RouterTestingModule,
                ReactiveFormsModule,
                CoreModule
            ],
            declarations: [DetailPage]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailPage);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

