import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofComponent } from './myprof.component';

describe('MyprofComponent', () => {
  let component: MyprofComponent;
  let fixture: ComponentFixture<MyprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyprofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
