import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {
  MOODLE_CURRENT_USE,
  MOODLE_JWT_TOKEN,
  USER_KEY,
} from '../core/config/constant';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _getBooks = "http://127.0.0.1:8000/books";
  private _loginUrl = "http://127.0.0.1:8000/login";
  private tokenSubject = new BehaviorSubject(null);
  private user = this.tokenSubject.asObservable();

  constructor( 
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}
  
  getBooks(): Observable<any>
  {
      return this.http.get<any>(this._getBooks);
  }
  setToken(token:any){
    this.tokenSubject.next(token);
  }
  getUser(){
    return this.user
  }
  get tokenValue(): any {
    return this.tokenSubject.value;
  }
  login(loginDataValue: any) {
    return this.http
      .post<any>(this._loginUrl, loginDataValue)
      .pipe(
        map((res: any) => {

          this.setToken(res);
          this.saveUserToLocalStorage(res)
          this.saveAccessTokenInLocalStorage(res.token);
          return res;
        })
      );
  }
  saveUserToLocalStorage(user: any) {

    let userJson =  JSON.stringify(user)

    localStorage.setItem(USER_KEY,userJson);
  }
  saveAccessTokenInLocalStorage(accessToken: string) {
    let accessTokenEncode = btoa(accessToken);
    localStorage.setItem(MOODLE_JWT_TOKEN, JSON.stringify(accessTokenEncode));
  }
  getAccesTokenFromLocalStorage() {
    const accessTokenEncodeJson = localStorage.getItem(MOODLE_JWT_TOKEN);
    if (accessTokenEncodeJson != null) {
      let accessTokenEncode = JSON.parse(accessTokenEncodeJson);
      return atob(accessTokenEncode);
    }
    return null;
  }
}
