import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  registerUserData = {
    name:'',
    password:'',
  }
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }
  onLogIn(){
    // this.authService.registerUser(this.registerUserData)
    // .subscribe((res: any) => {
      // console.log(res)
        // console.log(res.accessToken)
        // this.router.navigate(['app-login'])
        // console.log("Them thanh cong")
      // }
    // )
    
  }
}
