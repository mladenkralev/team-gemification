import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KudosHistoryComponent } from './kudos-history.component';

describe('KudosHistoryComponent', () => {
  let component: KudosHistoryComponent;
  let fixture: ComponentFixture<KudosHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KudosHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KudosHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
