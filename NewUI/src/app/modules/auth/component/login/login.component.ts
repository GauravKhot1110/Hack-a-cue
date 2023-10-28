import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/Helper/constants';

import { NotificationService } from 'src/app/notification/notification.service';
import { UserService } from 'src/app/services/user.service';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject, timer } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //form: FormGroup;
  //email:string;
  destroy = new Subject();
  timer: number;
  public loginForm: FormGroup;
  rxjsTimer = timer(1000, 1000);
  constructor(private formBuilder: FormBuilder, private userServices: UserService, private router: Router,
    private notifyService: NotificationService) {

    this.loginForm = this.formBuilder.group({
      UserName: ['', [Validators.required]],
      Password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

   
  }


  onSubmit() {
    debugger;

    let emailid = this.loginForm.controls["UserName"].value;
    let Password = this.loginForm.controls["Password"].value;
    const body = {
       userID: "string",
      firstName: "string",
      lastName: "string",
      email: emailid,
      mobileNumber: "string",
      geneder: "string",
      profileImg: "string",
      password: Password,
      isActive: true
    }
    //console.log("On submit",formData.value);
    this.userServices.login(body).subscribe(
      (data: any) => {
        debugger
        console.log(data)
        localStorage.setItem('token',data.Token);
        localStorage.setItem('LoginUserId',data.userID);
        // localStorage.setItem(Constants.USER_KEY, JSON.stringify(data.data));

        if(data.status =="Success"){
        debugger
        this.notifyService.showSuccess("Login successfull !!", '');
        // this.router.navigate(["../" + AdminRouteConfige.adminHome]);
        this.router.navigate(['/DashBoard']); 
      }
        else{
        this.notifyService.showError("Invalid User !!", '');
        }
        // this.router.navigate(["../" + AdminRouteConfige.adminPparent + "/" + AdminRouteConfige.adminHome]);
          

      },
      err => {
        this.notifyService.showError(err.error.massage, "");
        console.log(err);
        if (err.status == 400) {
          console.log(err);
        }
      }
    );
  }
}
