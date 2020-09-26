import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Attendee } from './models';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _http: HttpClient) { }

  // getAttendees(): Observable<Attendee[]> {
  //   return of([
  //     {
  //       name: 'xyz',
  //       attending: true,
  //       guests: 0
  //     }
  //   ] as Attendee[]);
  // }

  getAttendees(): Observable<Attendee[]> {
    return this._http.get<Attendee[]>('/api/attendees');
  }
}
