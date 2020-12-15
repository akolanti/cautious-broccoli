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
  public loginuserdata:{};
  constructor(    private router: Router,
    private formBuilder: FormBuilder,
    private Login: LoginService,


  ) { }

  ngOnInit() {
    if((localStorage.getItem('access_token')!='' || sessionStorage.getItem('access_token')!='') && (localStorage.getItem('access_token')!=null || sessionStorage.getItem('access_token')!=null))
    {
      this.router.navigate(["/dashboard"]);
      
    }
    
  this.createForm();
  }
  createForm() {
    this.ngForm = this.formBuilder.group({
      userName: [
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
    console.log(data.password);
    this.Login.postlogin(data).subscribe(
      res => {
       if(res['data']['password']==data.password)
       {
          console.log(res['token']);
          
            if (this.keep_login) {
                localStorage.setItem("access_token", res["token"]);
              } else {
                sessionStorage.setItem("access_token", res["token"]);
              }
              window.location.reload();

              this.router.navigate(["/dashboard"]);

       }
       else{
        this.show = !this.show;
       }

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
