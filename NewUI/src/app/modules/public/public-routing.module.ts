import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../auth/component/login/login.component';
import { RegistrationComponent } from '../user/registration/registration.component';
import { RatingComponent} from '../public/rating/rating.component';
import {AllProfilesComponent} from './all-profiles/all-profiles.component';
import { DashBoardComponent} from './dash-board/dash-board.component';
import { SearchComponent} from './search/search.component';
// import { AuthService} from 'src/app/guards/auth.service';
import {UploadProfileComponent} from './upload-profile/upload-profile.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },      
      { path: 'registration', component: RegistrationComponent },     
      {path:'AllProfile',component: AllProfilesComponent},
      {path:'UploadProfile',component: UploadProfileComponent},
      {path:'EmployeeRating',component: RatingComponent},
      {path:'DashBoard',component: DashBoardComponent},
      {path:'search',component: SearchComponent},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
