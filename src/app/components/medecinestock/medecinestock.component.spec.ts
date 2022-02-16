import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinestockComponent } from './medecinestock.component';

describe('MedecinestockComponent', () => {
  let component: MedecinestockComponent;
  let fixture: ComponentFixture<MedecinestockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinestockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
