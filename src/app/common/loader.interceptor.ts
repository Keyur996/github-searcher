import { ToastrService } from 'ngx-toastr';
import { LoaderService } from './../services/loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private _loader: LoaderService, private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.showLoader();
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error('Error in Interceptor:', err);
        this.toastr.error(err.message, 'Error');
        return throwError(err);
      }),
      finalize(() => {
        this.hideLoader();
      })
    );
  }

  showLoader() {
    this._loader.show();
  }

  hideLoader() {
    this._loader.hide();
  }
}
