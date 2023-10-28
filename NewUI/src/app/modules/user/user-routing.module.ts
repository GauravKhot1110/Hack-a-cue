import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserguardGuard } from 'src/app/user-guard/userguard.guard';
import { LoginComponent } from '../auth/component/login/login.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate: [UserguardGuard],
    children: [

      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
