import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable()
export class LogInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('=> Request logged: ' + req.url);
        console.log(req.headers);

        return next.handle(req).pipe(
            tap(event => {
                if(event instanceof HttpResponse) {
                    console.log('<= Response logged: ' + event.url);
                    console.log(event.headers);
                }
            })
        );
    }

  constructor(public auth: AuthService) {}
}