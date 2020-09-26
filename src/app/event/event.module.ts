import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { RouterModule } from '@angular/router';
import { AddAttendeeComponent } from '../add-attendee/add-attendee.component'
import { ReactiveFormsModule } from '@angular/forms';
import { EventListComponent } from '../event-list/event-list.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EventComponent, AddAttendeeComponent, EventListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: EventComponent }
    ])
  ]
})
export class EventModule { }
