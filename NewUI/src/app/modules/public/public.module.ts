import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from '../auth/component/login/login.component';
import { RegistrationComponent } from '../user/registration/registration.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';
import { RatingComponent } from './rating/rating.component';
import { SearchComponent } from './search/search.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';


@NgModule({
  declarations: [

    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    AllProfilesComponent,
    RatingComponent,
    DashBoardComponent,
    SearchComponent,
    UploadProfileComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    NgImageSliderModule,
    AutocompleteLibModule,
  ]
})
export class PublicModule { }
