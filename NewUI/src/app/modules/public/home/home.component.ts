import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  route: string;
  
    constructor(location: Location, router: Router) {
      router.events.subscribe((val) => {
        if(router.url === '/login' || router.url === '/registration' ){
          this.isLoginDone=false;
        } else {
          this.isLoginDone=true;
        }
      });
    }


  
  isLoginDone:boolean=false;
  ngOnInit(): void {

    // if(this.router.url === '/login')
    

  }

}
