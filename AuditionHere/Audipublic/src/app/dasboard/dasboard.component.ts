import { Component, OnInit } from '@angular/core';
import {Auditions} from '../auditions';
import {AuditionsService} from '../services/auditions.service';
import { Router } from "@angular/router";

import Swal from 'sweetalert2';
@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css'],
  providers:[AuditionsService]

})
export class DasboardComponent implements OnInit {

  audi: Auditions[];
  title:string;
  constructor( private router: Router,private audiService: AuditionsService) {  }
  ngOnInit(): void {
    if(localStorage.getItem('access_token')=='' && sessionStorage.getItem('access_token')=='')
    {
      this.router.navigate(["/login"]);
      
    }
    else if(localStorage.getItem('access_token')==null || sessionStorage.getItem('access_token')==null){
      this.router.navigate(["/login"]);

    }
this.getdata();


 }
search()
  {
    if(this.title!="")
    {
      this.audi=this.audi.filter(res=>{
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
      });
    }
    else if(this.title=="")
    {
       this.ngOnInit();
    }
    
  }
  getdata()
  {
    this.audiService
    .getAuditions()
    .then((Audi: Auditions[])=>{
      // console.log(books['data']);
      this.audi = Audi.map(audi =>{
        // console.log(books.title);
      return audi;
    });
    console.log(Audi)
  });
  }
}
