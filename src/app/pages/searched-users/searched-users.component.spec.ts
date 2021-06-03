import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedUsersComponent } from './searched-users.component';

describe('SearchedUsersComponent', () => {
  let component: SearchedUsersComponent;
  let fixture: ComponentFixture<SearchedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
