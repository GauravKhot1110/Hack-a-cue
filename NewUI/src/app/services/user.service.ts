import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { map, catchError, tap, mapTo } from 'rxjs/operators';
import { Constants, User } from '../Helper/constants';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  headers: any;
  formData?: User;
  isLoggedin: boolean = false;

  private readonly serverUrl: string = "https://localhost:7006/api/"
  constructor(private router: Router, private http: HttpClient) {
    let userInfo = this.getUserInfo();
    this.headers = new HttpHeaders({
      'Authorization': `bearer ${userInfo?.token}`

    });
  }
  //formData: any = new FormData();
  public login(body: any) {
    debugger;
    return this.http.post(this.serverUrl + 'user/login', body);
  }
  onLogOut() {
    localStorage.removeItem(Constants.USER_KEY);
    this.router.navigate(["login"]);
  }
  public userRegistration(body: any) {
  debugger;
   console.log(this.serverUrl + 'user/signup');
   console.log(body);
    return this.http.post(this.serverUrl + 'user/signup', body);
  }

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  // GetMyBlog(subURL:string): Observable<any> {
  //   debugger
  //   return this.http.get(this.serverUrl + subURL, this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // } 

  GetAllProfile(subURL:string): Observable<any> {
    debugger
    return this.http.get(this.serverUrl + subURL, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 


  UploadProfile(subURL:string,Title:string,Description:string,formData:FormData): Observable<any> {

    formData.append("Title", Title);
    formData.append("Description", Description);
    formData.append("CreateBy",""+ localStorage.getItem('LoginUserId'));
    
    console.log(this.serverUrl + subURL);
    
      return this.http.post(this.serverUrl + subURL, formData);
    }

  private isTokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return expiry * 1000 > Date.now();
  }

  isLoggedIn() {
    let userInfo = this.getUserInfo();
    if (userInfo == null) {
      this.isLoggedin = false;
      return this.isLoggedin;
    }
    else {
      const expiry = (JSON.parse(atob(userInfo.token.split('.')[1]))).exp;
      let a = expiry * 1000 > Date.now();

      if (userInfo && userInfo?.username && a) {
        // 
        return true;
      }
      else {
        localStorage.removeItem(Constants.USER_KEY);
        return false;
      }
    }
  }
  
  public getAllUSer(): Observable<User[]> {
    return this.http.get(this.serverUrl + 'PropertyTypeMaster/get-property-type', { headers: this.headers }).
      pipe<User[]>(map((data: any) => {

        return data
      }));;
  }

  getUserInfo() {

    let data: any = localStorage.getItem('LoginUserId');
    var user;
    if (data != null) {
      // user = JSON.parse(data);
    } else {

    }
    return user;
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
       return throwError('Something bad happened. Please try again later.');
  }

  

  addCart(ListID: number): Observable<any> {

    return this.http.get(this.serverUrl + 'AddToCart/add-cart/' + ListID, { headers: this.headers }).
      pipe<any>(map((data: any) => {

        return data
      }));
  }
  getCartCount(): Observable<any> {

    return this.http.get(this.serverUrl + 'AddToCart/cart-count/', { headers: this.headers }).
      pipe<any>(map((data: any) => {

        return data
      }));
  }

  public getCartList(): Observable<any[]> {

    //return this.http.post(this.serverUrl + 'Authentication/login', body);
    return this.http.get(this.serverUrl + 'AddToCart/cart-list', { headers: this.headers }).
      pipe<any[]>(map((data: any) => {

        return data
      }));
  }

  public removeItemFromCart(ListID: number) {


    return this.http.delete(this.serverUrl + 'AddToCart/remove-item/' + ListID, { headers: this.headers }).
      pipe<User[]>(map((data: any) => data));;
  }

  //Refresh cart item
  private componentMethodCallSource = new Subject<any>();
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  callComponentMethod(obj: any) {

    this.componentMethodCallSource.next(obj);

  }


}
