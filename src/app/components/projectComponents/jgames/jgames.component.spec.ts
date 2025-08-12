import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JgamesComponent } from './jgames.component';

describe('JgamesComponent', () => {
  let component: JgamesComponent;
  let fixture: ComponentFixture<JgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JgamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
