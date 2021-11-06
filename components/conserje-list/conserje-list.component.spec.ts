import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConserjeListComponent } from './conserje-list.component';

describe('ConserjeListComponent', () => {
  let component: ConserjeListComponent;
  let fixture: ComponentFixture<ConserjeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConserjeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConserjeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
