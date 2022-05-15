import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselEsencialesComponent } from './carrusel-esenciales.component';

describe('CarruselEsencialesComponent', () => {
  let component: CarruselEsencialesComponent;
  let fixture: ComponentFixture<CarruselEsencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselEsencialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselEsencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
