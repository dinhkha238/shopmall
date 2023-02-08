import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let accessToken = this.authService.getAccesTokenFromLocalStorage();
    let authentication = accessToken ? `Bearer ${accessToken}` : `Bearer `

    request = request.clone({
      setHeaders: { Authorization: authentication },
    });

    return next.handle(request);
  }
}
