import { Component, OnInit } from '@angular/core';
import {Actordata} from '../Actordata';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  search()
  {
    // if(this.title!="")
    // {
    //   this.books=this.books.filter(res=>{
    //     return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
    //   });
    // }
    // else if(this.title=="")
    // {
    //    this.ngOnInit();
    // }
    
  }
}
