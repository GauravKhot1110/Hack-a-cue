import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { Router } from '@angular/router';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {


  private totalRequests = 0;
  hasPreviousNavigation;
  constructor(
    private router: Router, private loadingService: LoaderService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var splitted = request.url.split("/");
    //this.hasPreviousNavigation = this.router._locationStrategy._platformLocation.location.pathname;
    console.log(request);
    //console.log('test', this.hasPreviousNavigation);

    debugger;
    this.totalRequests++;
    this.loadingService.setLoading(true, splitted[5]);
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests == 0) {
          this.loadingService.setLoading(false, splitted[5]);
        }
      })
    );
  }
}