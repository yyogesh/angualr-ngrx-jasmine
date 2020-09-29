import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EventService } from '../event.service';

import { EventComponent } from './event.component';

describe('EventComponent', () => {

  class MockEventService {
    getAttendees() {
      return of([
      ])
    }
  }

  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  let eventService: EventService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventComponent],
      providers: [
        { provide: EventService, useClass: MockEventService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    eventService = TestBed.get(EventService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of attendees', () => {
    const spyGetAttendees = spyOn(eventService, 'getAttendees').and.returnValue(of([{
      name: 'xyz',
      attending: true,
      guests: 0
    }]));
    component.ngOnInit();
    expect(spyGetAttendees).toHaveBeenCalled();
    expect(component.attendees.length).toEqual(1);
  })
});
