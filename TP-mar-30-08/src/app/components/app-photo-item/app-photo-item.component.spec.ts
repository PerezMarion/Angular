import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhotoItemComponent } from './app-photo-item.component';

describe('AppPhotoItemComponent', () => {
  let component: AppPhotoItemComponent;
  let fixture: ComponentFixture<AppPhotoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPhotoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhotoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
