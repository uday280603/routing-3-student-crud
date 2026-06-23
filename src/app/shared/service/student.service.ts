import { Injectable } from '@angular/core';
import { Istudent } from '../model/Istudent';
import { Observable, of } from 'rxjs';
import { Ires } from '../model/Ires';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  studentsArr: Istudent[] = [
    {
      id: 1,
      firstName: 'Rahul',
      lastName: 'Sharma',
      imageUrl:
        'https://imgs.search.brave.com/XgV5j2V1rBiSNoyognbATyc-Gs6As7yTrJkGl7OAW_M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIy/NjgxMzE3NC9waG90/by9wb3J0cmFpdC1v/Zi1hLWhhcHB5LWNv/bGxlZ2Utc3R1ZGVu/dC1zbWlsaW5nLW91/dGRvb3JzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0zaWhI/UGY5T1hidkVPUmY2/dVRwODZQUmdnb1Ri/NUZOdlRPQlE2MVo3/WnlVPQ',
      email: 'rahul.sharma@gmail.com',
      phone: '9876543210',
      dateOfBirth: '2002-05-15',
      gender: 'Male',
      bloodGroup: 'O+',
      address: {
        street: 'MG Road',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560001',
      },
      skills: ['Java', 'Spring Boot', 'Angular'],
      education: [
        {
          degree: 'B.Tech CSE',
          college: 'ABC Engineering College',
          year: 2024,
          percentage: 84,
        },
        {
          degree: 'Intermediate',
          college: 'Sri Chaitanya',
          year: 2020,
          percentage: 92,
        },
      ],
      certifications: [
        {
          name: 'Java Programming',
          issuer: 'Oracle',
          year: 2023,
        },
        {
          name: 'Angular Development',
          issuer: 'Udemy',
          year: 2024,
        },
      ],
      projects: [
        {
          title: 'Library Management System',
          technology: 'Spring Boot',
          duration: '3 Months',
        },
        {
          title: 'Student Portal',
          technology: 'Angular',
          duration: '2 Months',
        },
      ],
      hobbies: ['Reading', 'Cricket', 'Traveling']
    },

    {
      id: 2,
      firstName: 'Priya',
      lastName: 'Reddy',
      imageUrl:
        'https://imgs.search.brave.com/LSe6VNXK9gUEvDkhQDM8TmX10UkXMucjuPwZG2ouzfg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDc2NjA5Ni9waG90/by9iZWF1dGlmdWwt/c21pbGluZy1mZW1h/bGUtY29sbGVnZS1z/dHVkZW50LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1waFNP/SF9WQW01ZnN6VlNu/eG5QYlNqbGJuZTBT/cFVYUnYyVmx5cmRT/aWhRPQ',
      email: 'priya.reddy@gmail.com',
      phone: '9123456780',
      dateOfBirth: '2001-08-22',
      gender: 'Female',
      bloodGroup: 'A+',
      address: {
        street: 'Beach Road',
        city: 'Visakhapatnam',
        state: 'Andhra Pradesh',
        pincode: '530001',
      },
      skills: ['Python', 'Django', 'React'],
      education: [
        {
          degree: 'B.Tech IT',
          college: 'GVP College',
          year: 2023,
          percentage: 88,
        },
        {
          degree: 'Intermediate',
          college: 'Narayana',
          year: 2019,
          percentage: 95,
        },
      ],
      certifications: [
        {
          name: 'Python for Everybody',
          issuer: 'Coursera',
          year: 2022,
        },
        {
          name: 'React Masterclass',
          issuer: 'Udemy',
          year: 2023,
        },
      ],
      projects: [
        {
          title: 'E-Commerce Website',
          technology: 'React',
          duration: '4 Months',
        },
        {
          title: 'Hospital Management',
          technology: 'Django',
          duration: '5 Months',
        },
      ],
      hobbies: ['Painting', 'Music', 'Yoga']

    },

    {
      id: 3,
      firstName: 'Arjun',
      lastName: 'Kumar',
      imageUrl:
        'https://imgs.search.brave.com/5izm8lc_jC1gIh00btBllFBn7QPGaNFTDwdy_2J9CpI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzM5LzY0LzY2/LzM2MF9GXzQzOTY0/NjY0OV9xYmxJek9D/OHhyTnlCUjJwZ2JD/dUM2MGdJS29NWkp6/Ry5qcGc',
      email: 'arjun.kumar@gmail.com',
      phone: '9988776655',
      dateOfBirth: '2000-12-10',
      gender: 'Male',
      bloodGroup: 'B+',
      address: {
        street: 'Ring Road',
        city: 'Hyderabad',
        state: 'Telangana',
        pincode: '500001',
      },
      skills: ['Node.js', 'Express', 'MongoDB', 'Angular'],
      education: [
        {
          degree: 'B.Tech ECE',
          college: 'JNTU Hyderabad',
          year: 2022,
          percentage: 81,
        },
        {
          degree: 'Intermediate',
          college: 'Narayana',
          year: 2018,
          percentage: 89,
        },
      ],
      certifications: [
        {
          name: 'MongoDB Associate',
          issuer: 'MongoDB',
          year: 2022,
        },
        {
          name: 'Node.js Complete Guide',
          issuer: 'Udemy',
          year: 2023,
        },
      ],
      projects: [
        {
          title: 'Food Delivery App',
          technology: 'MEAN Stack',
          duration: '6 Months',
        },
        {
          title: 'Chat Application',
          technology: 'Socket.IO',
          duration: '3 Months',
        },
      ],
      hobbies: ['Football', 'Gaming', 'Photography']
    },
  ];

  fetchAllStudents(): Observable<Istudent[]> {
    return of(this.studentsArr);
  }

  getStudentById(studentId: number): Observable<Istudent> {
    let studentObj = this.studentsArr.find((s) => s.id === studentId)!;
    return of(studentObj);
  }

  removeStudent(removeId : number) : Observable<Ires<Istudent>>{
    let GETINDEX = this.studentsArr.findIndex(s => s.id === removeId);
    let array = this.studentsArr.splice(GETINDEX,1);
    return of({
      msg : `The student with id ${removeId} is removed successfully...!`,
      data : array[0]
    })
  }
}
