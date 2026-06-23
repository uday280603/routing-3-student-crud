import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDashboardComponent } from './shared/component/STUDENT/student-dashboard/student-dashboard.component';
import { StudentComponent } from './shared/component/STUDENT/student/student.component';
import { StudentFormComponent } from './shared/component/STUDENT/student-form/student-form.component';
import { MaterialModule } from './shared/module/material.module';
import { HomeDashboardComponent } from './shared/component/HOME/home-dashboard/home-dashboard.component';
import { NavbarComponent } from './shared/component/NAVBAR/navbar/navbar.component';
import { RoutingModule } from './routing.module';
import { GetConfirmComponent } from './shared/component/GETCONFIRM/get-confirm/get-confirm.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentComponent,
    StudentFormComponent,
    HomeDashboardComponent,
    NavbarComponent,
    GetConfirmComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    ReactiveFormsModule
  
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
