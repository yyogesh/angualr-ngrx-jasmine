import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Attendee } from '../models'

@Component({
  selector: 'app-add-attendee',
  templateUrl: './add-attendee.component.html',
  styleUrls: ['./add-attendee.component.scss']
})
export class AddAttendeeComponent implements OnInit {

  @Output() addAttendee = new EventEmitter<Attendee>();

  attAttenddeeForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
    console.log(this.attAttenddeeForm)
  }

  submit() {
    console.log(this.attAttenddeeForm.value)
    this.addAttendee.emit({
      name: this.attAttenddeeForm.value.name,
      attending: true,
      guests: 0
    })
  }

}
