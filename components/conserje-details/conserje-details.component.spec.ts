import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConserjeDetailsComponent } from './conserje-details.component';

describe('ConserjeDetailsComponent', () => {
  let component: ConserjeDetailsComponent;
  let fixture: ComponentFixture<ConserjeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConserjeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConserjeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
