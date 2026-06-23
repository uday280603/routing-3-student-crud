import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './shared/component/HOME/home-dashboard/home-dashboard.component';
import { StudentComponent } from './shared/component/STUDENT/student/student.component';
import { StudentDashboardComponent } from './shared/component/STUDENT/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component/STUDENT/student-form/student-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDashboardComponent,
  },
  {
    path: 'students',
    component: StudentDashboardComponent,
  },
  {
    path: 'students/:id',
    component: StudentComponent,
  },
   {
    path: 'students/:id/edit',
    component: StudentFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
