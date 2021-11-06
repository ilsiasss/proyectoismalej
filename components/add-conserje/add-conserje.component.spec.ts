import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConserjeComponent } from './add-conserje.component';

describe('AddConserjeComponent', () => {
  let component: AddConserjeComponent;
  let fixture: ComponentFixture<AddConserjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConserjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConserjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
