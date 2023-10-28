import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './component/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { NgImageSliderModule } from 'ng-image-slider';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    HomeComponent
 
    

  ],
  imports: [

    UserRoutingModule, FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    NgImageSliderModule,
    AutocompleteLibModule,
    CommonModule,

  ]
})
export class UserModule { }
