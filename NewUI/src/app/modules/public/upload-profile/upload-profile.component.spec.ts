import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProfileComponent } from './upload-profile.component';

describe('UploadProfileComponent', () => {
  let component: UploadProfileComponent;
  let fixture: ComponentFixture<UploadProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadProfileComponent]
    });
    fixture = TestBed.createComponent(UploadProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
