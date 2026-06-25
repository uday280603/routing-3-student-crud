import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './shared/component/HOME/home-dashboard/home-dashboard.component';
import { StudentComponent } from './shared/component/STUDENT/student/student.component';
import { StudentDashboardComponent } from './shared/component/STUDENT/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component/STUDENT/student-form/student-form.component';
import { ProductDashboardComponent } from './shared/component/PRODUCT/product-dashboard/product-dashboard.component';
import { ProductComponent } from './shared/component/PRODUCT/product/product.component';
import { ProductFormComponent } from './shared/component/PRODUCT/product-form/product-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDashboardComponent,
  },
  {
    path: 'students',
    component: StudentDashboardComponent,
    children: [
      {
        path: 'addStudent',
        component: StudentFormComponent,
      },
      {
        path: ':id',
        component: StudentComponent,
      },
      {
        path: ':id/edit',
        component: StudentFormComponent,
      },
    ],
  },
  {
    path: 'students/addStudent',
    component: StudentFormComponent,
  },
  {
    path: 'students/:id',
    component: StudentComponent,
  },
  {
    path: 'students/:id/edit',
    component: StudentFormComponent,
  },
  {
    path: 'products',
    component: ProductDashboardComponent,
  },
  
  {
    path: 'products/addProduct',
    component: ProductFormComponent,
    
  },
  {
    path: 'products/:productId',
    component: ProductComponent,
 
  }
  ,
  {
    path: 'products/:productId/edit',
    component: ProductFormComponent,
 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
