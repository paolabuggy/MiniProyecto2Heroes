import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptationsComponent } from './adaptations.component';

describe('AdaptationsComponent', () => {
  let component: AdaptationsComponent;
  let fixture: ComponentFixture<AdaptationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaptationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
