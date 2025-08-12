import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaMobileComponent } from './panda-mobile.component';

describe('PandaMobileComponent', () => {
  let component: PandaMobileComponent;
  let fixture: ComponentFixture<PandaMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PandaMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
