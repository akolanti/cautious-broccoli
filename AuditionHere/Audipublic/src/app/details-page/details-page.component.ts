import { Component, OnInit } from '@angular/core';
import {Auditions} from '../auditions';
import {AuditionsService} from '../services/auditions.service';

import{switchMap}from'rxjs/operators';
import{ActivatedRoute,Params}from'@angular/router'

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers:[AuditionsService]

})
export class DetailsPageComponent implements OnInit {

  constructor(private AudiService:AuditionsService,private route:ActivatedRoute){}
  newAudi:Auditions;
  roles:any;
  ngOnInit() {
    this.route.params.pipe(switchMap((params:Params)=>{
      return this.AudiService.getSingleAudition(params.id);}))
      .subscribe((newAudi:Auditions)=>{
      this.newAudi=newAudi;
      this.roles=newAudi.roles;
      console.log(newAudi);
     })
  }
  addtocart(i)
  {
    console.log(this.newAudi.roles[i]);

  }
}
