import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLayoutComponent } from './todo-layout.component';

describe('TodoLayoutComponent', () => {
  let component: TodoLayoutComponent;
  let fixture: ComponentFixture<TodoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
