import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const token = localStorage.getItem('token');
    console.log("-------------------------------------------")
    console.log(token)

   
      let tokenreq = request.clone({
        setHeaders: {
          Authorization: 'Bearer '+token?.replace(/[""]/g,'')
        }
      });
    
    console.log('Request headers:', request.headers); // Log the headers

    return next.handle(tokenreq);
  }
}
