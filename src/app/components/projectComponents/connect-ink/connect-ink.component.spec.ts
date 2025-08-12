import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectInkComponent } from './connect-ink.component';

describe('ConnectInkComponent', () => {
  let component: ConnectInkComponent;
  let fixture: ComponentFixture<ConnectInkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectInkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectInkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
