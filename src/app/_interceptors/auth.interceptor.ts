import { HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, switchMap } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.accessToken;
    if (accessToken) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${accessToken}` }
      });
    }
    return next.handle(req).pipe(
      catchError(err => {
        if (err.status === 401) { // Token expired
          return this.authService.refreshToken().pipe(
            switchMap(() => {
              // Retry request with new token
              const newReq = req.clone({
                setHeaders: { Authorization: `Bearer ${this.authService.accessToken}` }
              });
              return next.handle(newReq);
            })
          );
        }
        throw err;
      })
    );
  }
}