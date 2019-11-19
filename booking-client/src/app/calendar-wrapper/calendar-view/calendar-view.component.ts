import { Component, OnInit, ViewChild } from '@angular/core'
import { FullCalendarComponent } from '@fullcalendar/angular'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGrigPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { AppointmentsService } from 'src/app/shared/appointment-service/appointments.service'

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {
  @ViewChild('calendar', { static: true }) fullcalendar: FullCalendarComponent

  constructor(public appointmentsService: AppointmentsService) {}
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin]

  handleDateClick(calDate) {
    console.log(calDate)
  }

  eventClicked(calDate) {
    console.log(calDate)
  }

  eventDragStop(model) {
    console.log(model)
  }

  ngOnInit() {}
}
