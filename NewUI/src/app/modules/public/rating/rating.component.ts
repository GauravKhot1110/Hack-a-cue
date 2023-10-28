import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/Helper/constants';

import { NotificationService } from 'src/app/notification/notification.service';
import { UserService } from 'src/app/services/user.service';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject, timer } from 'rxjs';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  RatingData : any ={};

  // destroy = new Subject();
  timer: number;
  public RatingForm: FormGroup;
  rxjsTimer = timer(1000, 1000);
  constructor(private formBuilder: FormBuilder, private userServices: UserService, private router: Router,
    private notifyService: NotificationService) {

    this.RatingForm = this.formBuilder.group({
      Skillset: ['', [Validators.required]]
     
    })
    // this.RatingForm = new FormGroup({
    //   Skillset: new FormControl('', Validators.required)
    // });
  }

  ngOnInit(): void {

   
  }

  get f(){
    return this.RatingForm.controls;
  }
  
  onSubmit() {
      }
}
