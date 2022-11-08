import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialpostsComponent } from './socialposts.component';

describe('SocialpostsComponent', () => {
  let component: SocialpostsComponent;
  let fixture: ComponentFixture<SocialpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialpostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
