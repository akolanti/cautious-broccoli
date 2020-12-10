import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF} from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{path: '',component: LoginComponent}])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [LoginComponent]
})
export class AppModule { }
