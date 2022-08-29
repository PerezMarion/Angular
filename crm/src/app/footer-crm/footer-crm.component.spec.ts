import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCrmComponent } from './footer-crm.component';

describe('FooterCrmComponent', () => {
  let component: FooterCrmComponent;
  let fixture: ComponentFixture<FooterCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
