import { Component, OnInit } from '@angular/core';
import { Attendee } from '../models';
import { EventService } from '../event.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  attendees: Attendee[] = [];
  spinner$: Observable<boolean>;
  constructor(private _eventService: EventService, private _store: Store<any>) { }

  ngOnInit(): void {
    this.getAttendees();
    this.spinner$ = this._store.pipe(select(state => state.spinner.isOn));
  }

  getAttendees() {
    this._eventService.getAttendees().subscribe(attendees => (this.attendees = attendees))
  }

  addAttendee(attendee: Attendee) {
    this._store.dispatch({
      type: 'startSpinner'
    });
    setTimeout(() => {
      this.attendees = [...this.attendees, attendee];
      this._store.dispatch({
        type: 'stopSpinner'
      });
    }, 2000)
    console.log(this.attendees);
  }
}
