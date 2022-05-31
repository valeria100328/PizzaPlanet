import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsrolesComponent } from './listsroles.component';

describe('ListsrolesComponent', () => {
  let component: ListsrolesComponent;
  let fixture: ComponentFixture<ListsrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsrolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
