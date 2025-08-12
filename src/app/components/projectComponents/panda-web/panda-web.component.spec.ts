import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaWebComponent } from './panda-web.component';

describe('PandaWebComponent', () => {
  let component: PandaWebComponent;
  let fixture: ComponentFixture<PandaWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PandaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
