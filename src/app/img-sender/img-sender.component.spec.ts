import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSenderComponent } from './img-sender.component';

describe('ImgSenderComponent', () => {
  let component: ImgSenderComponent;
  let fixture: ComponentFixture<ImgSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgSenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
