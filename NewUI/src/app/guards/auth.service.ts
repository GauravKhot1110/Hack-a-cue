import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../Helper/constants';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router, private userServices: UserService, private authenticationService: AuthenticationService
  ) {


  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    debugger;
    //    const user=JSON.parse(localStorage.getItem(Constants.USER_KEY));
    let userInfo = this.userServices.getUserInfo();
    const expiry = (JSON.parse(atob(userInfo.token.split('.')[1]))).exp;
    let a = expiry * 1000 > Date.now();
    const user = this.authenticationService.userValue;
    if (user) {

      // check if route is restricted by role
      const { roles } = route.data;
      if (roles && !roles.includes(user.userrole)) {
        // role not authorized so redirect to home page
        this.router.navigate(['/']);
        return false;
      }

      // authorized so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;


    if (userInfo && userInfo?.username && userInfo?.userrole == "WFM") {
       
     this.router.navigate(["search"]);


      // authorised so return true
      return true;
    }
    else if (userInfo && userInfo?.username && userInfo?.userrole == "Mentor") {
       
      this.router.navigate(["Dashboard"]);
 
 
       // authorised so return true
       return true;
     }
    else {
      this.router.navigate(["login"]);
      return false;
    }
  }
  private isTokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return expiry * 1000 > Date.now();
  }
}
