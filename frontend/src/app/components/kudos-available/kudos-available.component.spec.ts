import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KudosAvailableComponent } from './kudos-available.component';

describe('KudosAvailableComponent', () => {
  let component: KudosAvailableComponent;
  let fixture: ComponentFixture<KudosAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KudosAvailableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KudosAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
