

export interface Istudent  {
 id: number;
 firstName: string;
 lastName: string;
 email: string;
 phone: string;
 dateOfBirth: string;
 gender: string;
 bloodGroup: string;
 imageUrl : string;
 address: {
 street: string;
 city: string;
 state: string;
 pincode: string;
 };
 skills: string[];
 education: {
 degree: string;
 college: string;
 year: number;
 percentage: number;
 }[];
 certifications: {
 name: string;
 issuer: string;
 year: number;
 }[];
 projects: {
 title: string;
 technology: string;
 duration: string;
 }[];
 hobbies: string[];

}[]