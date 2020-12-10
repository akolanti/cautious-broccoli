import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF} from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';
import { FrameworkComponent } from './framework/framework.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FrameworkComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,MatDatepickerModule,MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{path: '',component: LoginComponent},{path: 'register',component: RegistrationComponent},
  {path: '',redirectTo:'/register',pathMatch:"full"}]),
    BrowserAnimationsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
