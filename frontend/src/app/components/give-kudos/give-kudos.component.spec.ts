import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveKudosComponent } from './give-kudos.component';

describe('GiveKudosComponent', () => {
  let component: GiveKudosComponent;
  let fixture: ComponentFixture<GiveKudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiveKudosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiveKudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
