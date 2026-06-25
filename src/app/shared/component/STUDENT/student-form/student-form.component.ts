import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Istudent } from 'src/app/shared/model/Istudent';
import { SanckbarService } from 'src/app/shared/service/snackbar.service';
import { StudentService } from 'src/app/shared/service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;
  studentId!: number;
  editStudentObj!: Istudent;
  isInEditMode: boolean = false;

  constructor(
    private _studentService: StudentService,
    private _nsackbar: SanckbarService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.onCreateForm();

    this.onAddSkills();
    this.onAddEducation();
    this.onAddCertification();
    this.onAddProject();
    this.onAddHobby();

    this.onPatchData();
  }

  onCreateForm() {
    this.studentForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      imageUrl: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      bloodGroup: new FormControl(null, [Validators.required]),

      address: new FormGroup({
        street: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        state: new FormControl(null, [Validators.required]),
        pincode: new FormControl(null, [Validators.required]),
      }),

      skills: new FormArray([]),
      education: new FormArray([]),
      certifications: new FormArray([]),
      projects: new FormArray([]),
      hobbies: new FormArray([]),
    });
  }

  get c() {
    return this.studentForm.controls;
  }

  get skillArr() {
    return this.studentForm.get('skills') as FormArray;
  }

  get educationArr() {
    return this.studentForm.get('education') as FormArray;
  }

  get certificationArr() {
    return this.studentForm.get('certifications') as FormArray;
  }

  get projectArr() {
    return this.studentForm.get('projects') as FormArray;
  }

  get hobbyArr() {
    return this.studentForm.get('hobbies') as FormArray;
  }

  onAddSkills() {
    let control = new FormControl(null, [Validators.required]);
    this.skillArr.push(control);
  }

  onRemoveSkills(index: number) {
    this.skillArr.removeAt(index);
  }

  onAddEducation() {
    let group = new FormGroup({
      degree: new FormControl(null, [Validators.required]),
      college: new FormControl(null, [Validators.required]),
      year: new FormControl(null, [Validators.required]),
      percentage: new FormControl(null, [Validators.required]),
    });

    this.educationArr.push(group);
  }

  onRemoveEducation(index: number) {
    this.educationArr.removeAt(index);
  }

  onAddCertification() {
    let group = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      issuer: new FormControl(null, [Validators.required]),
      year: new FormControl(null, [Validators.required]),
    });

    this.certificationArr.push(group);
  }

  onRemoveCertification(index: number) {
    this.certificationArr.removeAt(index);
  }

  onAddProject() {
    let group = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      technology: new FormControl(null, [Validators.required]),
      duration: new FormControl(null, [Validators.required]),
    });

    this.projectArr.push(group);
  }

  onRemoveProject(index: number) {
    this.projectArr.removeAt(index);
  }

  onAddHobby() {
    let control = new FormControl(null, [Validators.required]);
    this.hobbyArr.push(control);
  }

  onRemoveHobby(index: number) {
    this.hobbyArr.removeAt(index);
  }

  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    } else {
      let NEW_OBJ: Istudent = {
        ...this.studentForm.value,
        id: Date.now(),
      };
      this._studentService.onCreateStudent(NEW_OBJ).subscribe({
        next: (data) => {
          this._nsackbar.openSnackBar(data.msg);
          this._router.navigate(['students']);
        },
      });
    }
  }

  onPatchData() {
    this.studentId = +this._activeRoute.snapshot.paramMap.get('id')!;
    if (this.studentId) {
      this.isInEditMode = true;
      this._studentService.getStudentById(this.studentId).subscribe({
        next: (res) => {
          this.editStudentObj = res;
          this.studentForm.patchValue({
            ...this.editStudentObj,
            skills: [],
            education: [],
            certifications: [],
            projects: [],
            hobbies: [],
          });

          this.skillArr.clear();
          this.editStudentObj.skills.forEach((skill) => {
            let skillControl = new FormControl(skill, [Validators.required]);
            this.skillArr.push(skillControl);
          });
          this.educationArr.clear()
          this.editStudentObj.education.forEach((e) => {
            let eductionGroup = new FormGroup({
              degree: new FormControl(e.degree, [Validators.required]),
              college: new FormControl(e.college, [Validators.required]),
              year: new FormControl(e.year, [Validators.required]),
              percentage: new FormControl(e.percentage, [Validators.required]),
            });
            this.educationArr.push(eductionGroup);
          });
          this.certificationArr.clear()
          this.editStudentObj.certifications.forEach((c) => {
            let certificateGroup = new FormGroup({
              name: new FormControl(c.name, [Validators.required]),
              issuer: new FormControl(c.issuer, [Validators.required]),
              year: new FormControl(c.year, [Validators.required]),
            });

            this.certificationArr.push(certificateGroup);
          });
          this.projectArr.clear()
          this.editStudentObj.projects.forEach((p) => {
            let projectGroup = new FormGroup({
              title: new FormControl(p.title, [Validators.required]),
              technology: new FormControl(p.technology, [Validators.required]),
              duration: new FormControl(p.duration, [Validators.required]),
            });

            this.projectArr.push(projectGroup);
          });
          this.hobbyArr.clear()
          this.editStudentObj.hobbies.forEach((h) => {
            let control = new FormControl(h, [Validators.required]);
            this.hobbyArr.push(control);
          });
        },
      });
    }
  }

  onUpdate() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    } else {
      let UPDATED_OBJ: Istudent = {
        ...this.studentForm.value,
        id: this.studentId,
      };
      this._studentService.onUpdateStudent(UPDATED_OBJ).subscribe({
        next: (data) => {
          this._nsackbar.openSnackBar(data.msg);
          this._router.navigate(['students']);
        },
      });
    }
  }
}
