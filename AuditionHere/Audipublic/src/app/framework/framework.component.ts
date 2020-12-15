import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {

  public signin:boolean=true;
  constructor(private router: Router,) { }

  ngOnInit() {
    if((localStorage.getItem('access_token')!='' || sessionStorage.getItem('access_token')!='') && (localStorage.getItem('access_token')!=null || sessionStorage.getItem('access_token')!=null))
    {
      this.signin=false;
      
    }
  }
   logout()
   {
     localStorage.setItem('access_token','');
     sessionStorage.setItem('access_token','');

     this.signin=true;

     this.router.navigate(["/login"]);
     window.location.reload();

   }
}
