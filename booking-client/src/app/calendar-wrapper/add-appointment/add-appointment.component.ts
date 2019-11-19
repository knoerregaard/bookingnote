import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { AppointmentsService } from 'src/app/shared/appointment-service/appointments.service'
import * as moment from 'moment'

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {
  addAppointmentForm: FormGroup
  emailNotification = false
  smsNotification = false

  constructor(
    public appointmentService: AppointmentsService,
    private fb: FormBuilder
  ) {
    this.addAppointmentForm = new FormGroup({
      date: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {}
  addAppointment() {
    if (
      !this.appointmentService.filteredNames.includes(
        this.addAppointmentForm.controls.name.value
      )
    ) {
      alert('Wrong name selected')
    } else {
      this.appointmentService.addEvent(
        this.addAppointmentForm.controls.description.value,
        moment(this.addAppointmentForm.controls.date.value.begin).format(
          'YYYY-MM-DD'
        ),
        moment(this.addAppointmentForm.controls.date.value.end).format(
          'YYYY-MM-DD'
        ),
        this.addAppointmentForm.controls.name.value,
        this.emailNotification,
        this.smsNotification
      )
      this.clearInputs()
    }
  }

  private clearInputs() {
    this.emailNotification = false
    this.smsNotification = false
    this.addAppointmentForm.controls.date.setValue(null)
    this.addAppointmentForm.controls.name.setValue(null)
    this.addAppointmentForm.controls.description.setValue(null)
    this.addAppointmentForm.reset()
  }
}
