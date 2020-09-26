import { Component, OnInit } from '@angular/core';
import { Attendee } from '../models';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  attendees: Attendee[] = [];

  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    this.getAttendees();
  }

  getAttendees() {
    this._eventService.getAttendees().subscribe(attendees => (this.attendees = attendees))
  }

  addAttendee(attendee: Attendee) {
    this.attendees = [...this.attendees, attendee]
    console.log(this.attendees);
  }
}
