import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KosarComponent } from './kosar.component';

describe('KosarComponent', () => {
  let component: KosarComponent;
  let fixture: ComponentFixture<KosarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KosarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KosarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
