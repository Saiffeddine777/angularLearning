import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAClientComponent } from './create-aclient.component';

describe('CreateAClientComponent', () => {
  let component: CreateAClientComponent;
  let fixture: ComponentFixture<CreateAClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAClientComponent]
    });
    fixture = TestBed.createComponent(CreateAClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
