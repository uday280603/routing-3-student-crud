import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/shared/model/Istudent';
import { StudentService } from 'src/app/shared/service/student.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  getAllStudents !: Istudent[];

  constructor(private _studentservice : StudentService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this._studentservice.fetchAllStudents()
    .subscribe({
      next : data =>{
        this.getAllStudents = data

      }
    })
  
  }

}
