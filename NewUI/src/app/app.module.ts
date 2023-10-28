import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './guards/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthModule } from './modules/auth/auth.module';
// import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './spinner/loading.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './modules/public/home/home.component';
import { FooterComponent } from './modules/public/shared/footer/footer.component';
import { HeaderComponent } from './modules/public/shared/header/header.component';
import { PublicModule } from './modules/public/public.module';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
   
  ],
  imports: [FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    PublicModule,
    AuthModule,
    // AdminModule,
    UserModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule,
    //NgxSpinnerModule,
    NgbModule, NgImageSliderModule

  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
