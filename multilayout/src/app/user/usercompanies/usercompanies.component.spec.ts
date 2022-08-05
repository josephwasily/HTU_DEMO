import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercompaniesComponent } from './usercompanies.component';

describe('UsercompaniesComponent', () => {
  let component: UsercompaniesComponent;
  let fixture: ComponentFixture<UsercompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
