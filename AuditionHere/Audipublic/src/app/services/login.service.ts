import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginurl: string = "http://localhost:3000/api/login";
  


  constructor(private http:HttpClient){

  } 
  postlogin(email, password){
  

    let formData: FormData = new FormData();
    formData.append('userName', email);
    formData.append('password', password);
  
    //return this.http.post(this.loginurl, formData);
     //return "loginsuccesful";
     return this.http.post(this.loginurl, formData);
 }
}
