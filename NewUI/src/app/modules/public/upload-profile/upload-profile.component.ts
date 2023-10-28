import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NotificationService } from "src/app/notification/notification.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-upload-profile',
  templateUrl: './upload-profile.component.html',
  styleUrls: ['./upload-profile.component.css']
})
export class UploadProfileComponent {

  submitted = false;
  isWorking = false;
  constructor(private fb: FormBuilder, private userServices: UserService, private notifyService: NotificationService) { }
  ngOnInit(): void {
    
  }

  uploadFile: any;
  uploadFileLabel: string | undefined = 'Choose an image to upload';
 
  handleFileInput(files: FileList) {
    if (files.length > 0) {
      this.uploadFile = files.item(0);
      this.uploadFileLabel = this.uploadFile?.name;
    }
  }

  UploadProfileForm = new FormGroup(
    {
     
      
    },
    
  );

  public handleError = (controlName: string, errorName: string) => {
    return this.UploadProfileForm.controls[controlName].hasError(errorName);
  };
  
 
  get f() {
    return this.UploadProfileForm.controls;
  }

  formData = new FormData();
  working = false;
  OnCreate() {
    if (!this.uploadFile) {
      alert('Choose a file to upload first');
      return;
    }
    debugger;
    let Blogtitle = this.UploadProfileForm.controls["Title"].value;
    let BlogDetails = this.UploadProfileForm.controls["Details"].value;
   
    console.log(Blogtitle, BlogDetails);

    this.submitted = true;

    

    this.isWorking = true;
    this.UploadProfileForm.disable();


    
    this.formData.append(this.uploadFile.name, this.uploadFile);
    this.working = true;
     this.userServices.UploadProfile('/uploadProfile',Blogtitle,BlogDetails,this.formData)
      .subscribe((res: any)=>{
        console.log('response...'+JSON.stringify(res));
        if(res.status === "Success"){
          this.notifyService.showSuccess(res.message, "");
        }
        else{
          this.notifyService.showError(res.message, "");
        }
      
       })
   
    this.isWorking = false;
    this.UploadProfileForm.enable();
  }



}
