import { Injectable } from '@angular/core'
import { EventInput } from '@fullcalendar/core'

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  filteredNames = ['John', 'Sara', 'Jessie']
  public calendarEvents: EventInput[] = [
    { title: 'Event 1', date: '2019-11-15', ownerName: 'Jessie' },
    { title: 'Event 2', date: '2019-11-19', ownerName: 'John' },
    { title: 'Event 3', date: '2019-11-17', ownerName: 'John' },
    { title: 'Event 4', date: '2019-11-15', ownerName: 'Sara' }
  ]

  private calendarEventsCloned: EventInput[] = Object.assign(
    [],
    this.calendarEvents
  )

  constructor() {}

  cloneCalendarEvents() {
    this.calendarEvents = Object.assign([], this.calendarEventsCloned)
  }

  addEvent(
    titleEvent: string,
    dateStart: string,
    endDate: string,
    userName: string,
    sendEmailNotification: boolean,
    sendSmsNotification: boolean
  ) {
    this.calendarEvents = this.calendarEvents.concat({
      title: titleEvent,
      date: dateStart,
      end: endDate,
      ownerName: userName,
      emailNotification: sendEmailNotification,
      smsNotification: sendSmsNotification
    })
    this.calendarEventsCloned = Object.assign([], this.calendarEvents)
  }

  filterEvents(filterValue: string) {
    this.calendarEvents = this.calendarEventsCloned
    if (filterValue.length !== 0) {
      this.calendarEvents = this.calendarEvents.filter(
        a => a.ownerName === filterValue
      )
    } else {
      this.calendarEvents = this.calendarEventsCloned
    }
  }
}
