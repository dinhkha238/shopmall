import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {
  canActivate(route:import ('@angular/router' ).ActivatedRouteSnapshot, state: import('@angular/router'). RouterStateSnapshot):boolean {
      return true;
  }
  constructor() { }
}
