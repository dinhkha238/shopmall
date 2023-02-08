import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Emitters } from 'src/app/emitter/emitters';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';
export const MOODLE_JWT_TOKEN = 'moodle-jwt-token'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    name:'',
    password:'',
  }
  toastr: any;
  message = ''
  token = ''
  constructor(private router:Router, private authService:AuthService,private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  onLogIn(){
    this.authService.login(this.loginUserData).pipe(first())
    .subscribe(
      (res: any) => {
        this.router.navigateByUrl('/')
        console.log(this.authService.tokenValue)
        console.log('Log in success')
      },
      (err:HttpErrorResponse) => {
        console.log('Fail')

      }
      
    )
    // localStorage.removeItem(MOODLE_JWT_TOKEN)
    this.authService.getBooks().subscribe((data: any)=>{
      console.log(data.data)
    })
    console.log({abc:this.authService.getAccesTokenFromLocalStorage()})
  }


}
