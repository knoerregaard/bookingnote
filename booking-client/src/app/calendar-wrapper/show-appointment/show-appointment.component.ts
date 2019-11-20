import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AppointmentsService } from 'src/app/shared/appointment-service/appointments.service'

@Component({
  selector: 'app-show-appointment',
  templateUrl: './show-appointment.component.html',
  styleUrls: ['./show-appointment.component.scss']
})
export class ShowAppointmentComponent implements OnInit {
  showAppointmentForm: FormGroup
  constructor(public appointmentService: AppointmentsService) {
    this.showAppointmentForm = new FormGroup({
      name: new FormControl()
    })
  }

  ngOnInit() {

  }

  filterByUsername() {
    if (
      !this.appointmentService.filteredNames.includes(this.showAppointmentForm.controls.name.value) &&
      this.showAppointmentForm.controls.name.value.length > 0
      ) {
      alert('Select the correct one to filter')
    } else {
      this.appointmentService.filterEvents(
        this.showAppointmentForm.controls.name.value
      )
    }
  }
}
