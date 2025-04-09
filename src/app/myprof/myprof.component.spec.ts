import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfComponent } from './myprof.component';

describe('MyprofComponent', () => {
  let component: MyProfComponent;
  let fixture: ComponentFixture<MyProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
