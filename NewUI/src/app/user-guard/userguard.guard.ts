import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserguardGuard implements CanActivate {
  constructor(private router: Router, private userServices: UserService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let userInfo = this.userServices.getUserInfo();
    const expiry = (JSON.parse(atob(userInfo.token.split('.')[1]))).exp;
    let a = expiry * 1000 > Date.now();


    debugger;
    if (userInfo && userInfo?.username && userInfo?.userrole == "buyer" && a) {
      // 
      //this.router.navigate(["property/home"]);
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

