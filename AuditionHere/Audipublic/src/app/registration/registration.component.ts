import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {RegisterServiceService} from '../services/register-service.service';
import {Actordata} from '../actordata';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[RegisterServiceService]
})
export class RegistrationComponent implements OnInit {
  private demoDate= new Date((new Date()).getTime() + 24*60*60*1000);

 public newActor:Actordata={
  _id: '',
  userName:'',
  firstName:'',
  lastName:'',
  actorHeight:0,
  actorWeight:0,
  actorBirthDate:this.demoDate,
  actorEthinicity:'',
  actorEyeColor:'',
  actorSkills:[''],
  actorActingCredits:[''],
  actorOtherData:[],
 };


 ngForm: FormGroup;
  public formError: string;
  public formAdded:string;

  constructor(private registerService:RegisterServiceService,private router: Router,
    private formBuilder: FormBuilder,
   ) { }

  ngOnInit() 
    {
      this.createForm();
      }
      createForm() {
        this.ngForm = this.formBuilder.group({
          email: [
            "",
            [
              Validators.required,
              Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]
          ],
          password: ["", [Validators.required]]
        });
      }
  private formIsValid(): boolean { 
  
  if (this.newActor.userName && 
    this.newActor.firstName  && 
    this.newActor.lastName  
    && this.newActor.actorHeight 
    &&  this.newActor.actorWeight
    && this.newActor.actorActingCredits
    && this.newActor.actorBirthDate
    && this.newActor.actorEthinicity
    && this.newActor.actorEyeColor 
    ) {
      return true;
    } else {
      return false;
    }
  }

  //@Input()
  validation:Function
  public addactor(): void {
    this.formError = ''; 
    this.formAdded='';
    if (this.formIsValid()) { 
        console.log(this.newActor); 
        this.registerService.createActor(this.newActor)
              .then((b: Actordata) => {
                console.log("entry saved", b);
                this.formAdded=' added Successfully';
              });
    } else { 
        this.formError = 'All fields required, please try again'; 
    }
  }

  public createNewActor(newActor:Actordata):void{
    this.registerService.createActor(newActor).then((preActor:Actordata)=>{this.validation(preActor)});
  }

}
