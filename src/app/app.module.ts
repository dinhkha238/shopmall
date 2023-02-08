import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { GaugeModule } from 'angular-gauge';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TaskComponent } from './components/task/task.component';
import { CartComponent } from './components/cart/cart.component';
import { Quan1Component } from './product/quan/quan1/quan1/quan1.component';
import { Quan2Component } from './product/quan/quan2/quan2/quan2.component';
import { Quan3Component } from './product/quan/quan3/quan3/quan3.component';
import { Quan4Component } from './product/quan/quan4/quan4/quan4.component';
import { TrouserListComponent } from './components/trouser-list/trouser-list.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    LoginComponent,
    TaskComponent,
    CartComponent,
    Quan1Component,
    Quan2Component,
    Quan3Component,
    Quan4Component,
    TrouserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule ,
    ReactiveFormsModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
