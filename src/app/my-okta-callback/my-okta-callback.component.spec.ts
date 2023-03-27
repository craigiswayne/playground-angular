import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOktaCallbackComponent } from './my-okta-callback.component';

describe('MyOktaCallbackComponent', () => {
  let component: MyOktaCallbackComponent;
  let fixture: ComponentFixture<MyOktaCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOktaCallbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOktaCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
