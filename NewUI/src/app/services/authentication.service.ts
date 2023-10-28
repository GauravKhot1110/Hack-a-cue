import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../Models/user';
import { Constants } from '../Helper/constants';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        debugger;
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(Constants.USER_KEY)).data);
        this.user = this.userSubject.asObservable();
    }
    getUserInfo() {
        debugger;

        let data: any = localStorage.getItem(Constants.USER_KEY);
        var user;
        if (data != null) {
            user = JSON.parse(data);
        } else {

        }
        return user;
    }
    public get userValue(): User {
        return this.userSubject.value;
    }

    login(body: any) {

        debugger;

        return this.http.post<any>(environment.apiUrl + 'user/login', body)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem(Constants.USER_KEY, JSON.stringify(user));               
                this.userSubject.next(user.data);
                return user;
            }));
    }

    logout() {
        debugger;
        localStorage.removeItem(Constants.USER_KEY);
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}