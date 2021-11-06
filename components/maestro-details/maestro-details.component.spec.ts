import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroDetailsComponent } from './maestro-details.component';

describe('MaestroDetailsComponent', () => {
  let component: MaestroDetailsComponent;
  let fixture: ComponentFixture<MaestroDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestroDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
