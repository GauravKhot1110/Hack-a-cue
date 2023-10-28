import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NotificationService } from "src/app/notification/notification.service";
import { PasswordValidators } from "src/app/password-validators";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userTypes: any;
  submitted = false;
  isWorking = false;
  constructor(private fb: FormBuilder, private userServices: UserService, private notifyService: NotificationService) {


   }
  ngOnInit(): void {
    // this.GetUserTypeList();
  }
  signupForm = new FormGroup(
    {
      userType: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      name: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      lname: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      email: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
        ])),
      password: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), {
            requiresDigit: true
          }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), {
            requiresUppercase: true
          }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), {
            requiresLowercase: true
          }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&])"), {
            requiresSpecialChars: true
          })
        ])
      ),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    },
    {
      validators: PasswordValidators.MatchValidator
    }
  );
  /* Select Dropdown error handling */
  public handleError = (controlName: string, errorName: string) => {
    return this.signupForm.controls[controlName].hasError(errorName);
  };
  changeSuit(e) {
    this.signupForm.get('userType').setValue(e.target.value, {
      onlySelf: true,
    });
  }
  // convenience getter for easy access to form controls
  get f() {
    return this.signupForm.controls;
  }

  get passwordValid() {

    return this.signupForm.controls["password"].errors === null;
  }

  get requiredValid() {
    return !this.signupForm.controls["password"].hasError("required");

  }

  get minLengthValid() {
    return !this.signupForm.controls["password"].hasError("minlength");
  }

  get requiresDigitValid() {
    return !this.signupForm.controls["password"].hasError("requiresDigit");
  }

  get requiresUppercaseValid() {
    return !this.signupForm.controls["password"].hasError("requiresUppercase");
  }

  get requiresLowercaseValid() {
    return !this.signupForm.controls["password"].hasError("requiresLowercase");
  }

  get requiresSpecialCharsValid() {
    return !this.signupForm.controls["password"].hasError("requiresSpecialChars");
  }

   onSubmit() {
    debugger;
    let email = this.signupForm.controls["email"].value;
    let fname = this.signupForm.controls["name"].value;
    let lname = this.signupForm.controls["lname"].value;
    let password = this.signupForm.controls["password"].value;
    let role = this.signupForm.controls["userType"].value;
    let MobileNumber = "1231231231";
    let Geneder="Male";
    console.log(email, fname,lname, password, role,MobileNumber,Geneder);

    this.submitted = true;

    // if (this.signupForm.invalid) {
    //   return;
    // }

    this.isWorking = true;
    this.signupForm.disable();
    const body = {
      userID: "string",
      email: email,
      firstName: fname,
      lastName:lname,
      password: password,
      profileImg: "-",
      // Role: role,
      mobileNumber:"1231231231",
      geneder:"Male",
      isActive:true
    }
    this.userServices.userRegistration(body).subscribe(
      (data: any) => {

        this.signupForm.reset();
        this.notifyService.showSuccess("Data save successfully !!", "")

      },
      err => {

        this.notifyService.showError(err.error.massage, "");
        console.log(err);
        if (err.status == 400) {
          console.log(err);
        }

      }

    );
    this.isWorking = false;
    this.signupForm.enable();
  }

}
