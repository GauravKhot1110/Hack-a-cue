import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject, timer } from 'rxjs';
import { Router } from '@angular/router';
import { Constants } from './Helper/constants';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  destroy = new Subject();
  showDialog = false;
  timer: number;
  dialog = 'stay logged in?';
  notice = 'session expired';
  showNotice = false;

  rxjsTimer = timer(1000, 1000);

  uploadedFiles: any[] = [];
  title = 'Blog-Admin';
  constructor(private router: Router, private userServices: UserService) { }
  }
