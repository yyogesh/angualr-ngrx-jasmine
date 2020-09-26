import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Attendee } from '../models';

import { AddAttendeeComponent } from './add-attendee.component';

describe('AddAttendeeComponent', () => {
  let component: AddAttendeeComponent;
  let fixture: ComponentFixture<AddAttendeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AddAttendeeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has an invalid form on load', () => {
    expect(component.attAttenddeeForm.valid).toEqual(false);
  });

  it('shouldhas a valid form', () => {
    component.attAttenddeeForm.controls.name.setValue('xyz')
    expect(component.attAttenddeeForm.valid).toEqual(true);
  });

  it('should emit an attendee', () => {
    component.attAttenddeeForm.controls.name.setValue('xyz');
    component.addAttendee.subscribe((attendee: Attendee) => {
      expect(attendee.name).toEqual('xyz');
    })
    component.submit();
  })

});
