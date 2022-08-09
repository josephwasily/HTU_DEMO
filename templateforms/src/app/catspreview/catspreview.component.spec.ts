import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatspreviewComponent } from './catspreview.component';

describe('CatspreviewComponent', () => {
  let component: CatspreviewComponent;
  let fixture: ComponentFixture<CatspreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatspreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatspreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
