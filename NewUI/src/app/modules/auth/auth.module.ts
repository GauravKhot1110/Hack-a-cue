import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [

    //LoginComponent
  ],
  imports: [
    CommonModule,
    
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ]
})
export class AuthModule { }
