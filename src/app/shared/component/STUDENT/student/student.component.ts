import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Istudent } from 'src/app/shared/model/Istudent';
import { StudentService } from 'src/app/shared/service/student.service';
import { GetConfirmComponent } from '../../GETCONFIRM/get-confirm/get-confirm.component';
import { SanckbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  studentObj!: Istudent;
  studentId!: number;

  constructor(
    private _activated: ActivatedRoute,
    private _studentservice: StudentService,
    private _matdialog: MatDialog,
    private _snackbar: SanckbarService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.getStudentById();
  }

  getStudentById() {
    // this.studentId = +this._activated.snapshot.paramMap.get('id')!;

    this._activated.params.subscribe((params: Params) => {
      this.studentId = +params['id']!;
      this._studentservice.getStudentById(this.studentId).subscribe({
        next: (data) => {
          this.studentObj = data;
        },
      });
    });
  }

  onRemoveStudent() {
    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    config.data = `Are you sure to remove the student with id ${this.studentId}..?`;
    let _matRef = this._matdialog.open(GetConfirmComponent, config);
    _matRef.afterClosed().subscribe((getConfirm) => {
      if (getConfirm === true) {
        this._studentservice.removeStudent(this.studentId).subscribe({
          next: (res) => {
            this._snackbar.openSnackBar(res.msg);
            this._router.navigate(['/students']);
          },
        });
      }
    });
  }
}
