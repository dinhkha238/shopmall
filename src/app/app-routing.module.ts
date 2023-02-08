import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {TaskComponent} from './components/task/task.component'
import { TrouserListComponent } from './components/trouser-list/trouser-list.component';
import { Quan1Component } from './product/quan/quan1/quan1/quan1.component';
import { Quan2Component } from './product/quan/quan2/quan2/quan2.component';
import { Quan3Component } from './product/quan/quan3/quan3/quan3.component';
import { Quan4Component } from './product/quan/quan4/quan4/quan4.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:game',
    component: HomeComponent
  },
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-task',
    component: TaskComponent
  },
  {
    path: 'app-cart',
    component: CartComponent
  },
  {
    path: 'trouser/quan-1',
    component: Quan1Component
  },
  {
    path: 'trouser/quan-2',
    component: Quan2Component
  },
  {
    path: 'trouser/quan-3',
    component: Quan3Component
  },
  {
    path: 'trouser/quan-4',
    component: Quan4Component
  },
  {
    path: 'trouser',
    component: TrouserListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }















