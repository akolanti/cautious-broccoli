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
import { DasboardComponent } from './dasboard/dasboard.component';
import { HomeComponent } from './home/home.component';
import { DetailsPageComponent } from './details-page/details-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FrameworkComponent,
    DasboardComponent,
    HomeComponent,
    DetailsPageComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,MatDatepickerModule,MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'login',component: LoginComponent},
      {path: 'register',component: RegistrationComponent},
      {path: '',redirectTo:'/login',pathMatch:"full"},
      {path: 'dashboard',component: DasboardComponent},
      {path: 'home',component: HomeComponent},
      {path: 'details',component: DetailsPageComponent},



    ]),
    BrowserAnimationsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
