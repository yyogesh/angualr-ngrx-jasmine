import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Attendee } from '../models';

import { EventListComponent } from './event-list.component';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have one attendee on load', () => {
    component.attendees = [
      {
        name: 'x', attending: true, guests: 2
      }
    ] as Attendee[];
    expect(component.attendees.length).toEqual(1);
  })
});
