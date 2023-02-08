import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitter/emitters';
import { AuthService } from 'src/app/services/auth.service';
import { HomeComponent } from '../home/home.component';
import { MOODLE_JWT_TOKEN } from '../login/login.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public products = [
    "Quần","Áo","Giày","Phụ kiện"
  ]
  check = false
  authenticated = true
  constructor(
    private router: Router,
    private authService:AuthService,
    private http:HttpClient,
    // private home:HomeComponent,
    ) { }

  ngOnInit(): void {
    // Emitters.authEmitter.subscribe(
    //   (auth:boolean) => {
    //     this.authenticated = auth
    //   }
    // )

  }
  onSubmit( form: NgForm ): void{
    this.router.navigate(['search',form.value.search]);
  }
  onLogIn(){
    this.router.navigate(['app-login'])
  }
  onLogout(){
    // this.authService.login({name:'',password:''})
    //   .subscribe(
    //     (res) => {
    //       this.router.navigateByUrl('/')

    //     }
    //   )
    localStorage.removeItem(MOODLE_JWT_TOKEN)
    this.router.navigateByUrl('app-cart')

    //   this.http.get('http://localhost:3000/api/login')
    //   .subscribe (
    //     (res:any) => {
    //       Emitters.authEmitter.emit(false);
    //   },
    //     (err:any) => {
    //       Emitters.authEmitter.emit(true);
    //   }
    //   )
  }
  onCart(){
    this.router.navigate(['app-cart'])
  }
  onProduct(product:any){
    if(this.authService.tokenValue==null){
      this.router.navigate(['app-login'])
      console.log({abc:this.authService.tokenValue})
    }
      
    else {
      if(product === 'Quần') this.router.navigateByUrl('trouser')
      console.log({abc:this.authService.tokenValue})
    }


  }
}
