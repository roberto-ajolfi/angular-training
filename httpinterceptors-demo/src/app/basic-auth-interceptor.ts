import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: `${this.auth.getToken()}`
            }
        });

        console.log('Basic Auth header added (' +  req.url + ').');
        console.log(req.headers);

        return next.handle(req);
    }

  constructor(public auth: AuthService) {}
}