import { FullCalendarModule } from '@fullcalendar/angular'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
// Components
import { CalendarWrapperComponent } from './calendar-wrapper.component'
import { CalendarViewComponent } from './calendar-view/calendar-view.component'
import { AddAppointmentComponent } from './add-appointment/add-appointment.component'
import { ShowAppointmentComponent } from './show-appointment/show-appointment.component'
// Material
import { MaterialModule } from '../material/material.module'
// Saturn
import { SatNativeDateModule, SatDatepickerModule } from 'saturn-datepicker'

const routes: Routes = [{ path: '', component: CalendarWrapperComponent }]

@NgModule({
  declarations: [
    CalendarWrapperComponent,
    CalendarViewComponent,
    AddAppointmentComponent,
    ShowAppointmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FullCalendarModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SatDatepickerModule,
    SatNativeDateModule
  ]
})
export class CalendarWrapperModule {}
