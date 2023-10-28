import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from '@app/notification/notification.service';
import { UserService } from '@app/services/user.service';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css']
})
export class AllProfilesComponent {

  CreateBlogData : any ={};
  flag: boolean = false
  dtOptions: any = {};

  constructor(private fb: FormBuilder, private userServices: UserService, private notifyService: NotificationService) { 
    this.bindAllPost();
  }

  bindAllPost(){
    debugger
    this.userServices.GetAllProfile('getallprofile')
    .subscribe((res: any)=>{
      console.log('response...'+JSON.stringify(res));
      if(res){
        this.CreateBlogData=res;
        this.flag = true;
      }
      else{
        this.notifyService.showError(res, "");
      }
    })

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'print'
        ]
    };
  }

}
