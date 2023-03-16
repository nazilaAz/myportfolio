import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothsideasideComponent } from './bothsideaside.component';

describe('BothsideasideComponent', () => {
  let component: BothsideasideComponent;
  let fixture: ComponentFixture<BothsideasideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BothsideasideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BothsideasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
