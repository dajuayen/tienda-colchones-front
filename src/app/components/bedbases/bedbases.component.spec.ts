import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedbasesComponent } from './bedbases.component';

describe('BedbasesComponent', () => {
  let component: BedbasesComponent;
  let fixture: ComponentFixture<BedbasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedbasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedbasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
