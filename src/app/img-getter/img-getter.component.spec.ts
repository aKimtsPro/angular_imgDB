import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgGetterComponent } from './img-getter.component';

describe('ImgGetterComponent', () => {
  let component: ImgGetterComponent;
  let fixture: ComponentFixture<ImgGetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgGetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
