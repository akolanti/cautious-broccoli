import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {LoginService} from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngForm: FormGroup;
  public show = false;
  public keep_login = false;

  constructor(    private router: Router,
    private formBuilder: FormBuilder,
    private Login: LoginService,


  ) { }

  ngOnInit() {
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
  onClickSubmit(data) {
    // alert("Entered Email id : " + data.email);
    //  alert("Entered Email id : " + data.password);
    let email = data.email;
    let password = data.password;

    this.Login.postlogin(email, password).subscribe(
      res => {
        
     
        if (this.keep_login) {
          localStorage.setItem("access_token", res["access_token"]);
        } else {
          sessionStorage.setItem("access_token", res["access_token"]);
        }
       
       
        this.router.navigate(["/Dashboard"]);
      
      },
      error => {
        this.show = !this.show;
        console.log(error.error);
      }
    );
  }
  public set_show() {
    if (this.show == true) {
      this.show = !this.show;
    }
  }
  public keepmelogin() {
    this.keep_login = !this.keep_login;
  }
}
