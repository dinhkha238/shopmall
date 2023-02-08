import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitter/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  message = '';
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    // this.http.get('http://localhost:3000/api/login')
    //   .subscribe (
    //     (res:any) => {
    //       this.message = `Hello ${res.name}`;
    //       Emitters.authEmitter.emit(false);
    //   },
    //     (err:any) => {
    //       this.message = 'You are not logged in';
    //       Emitters.authEmitter.emit(true);

    //   }
    //   )

  }
   

}



