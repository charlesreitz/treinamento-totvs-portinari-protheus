import { ConfigService } from './config.service';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Injectable, NgModule, } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { switchMap, catchError, take, finalize, mergeMap } from 'rxjs/operators';
import {
  HttpRequest, HttpHandler, HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpErrorResponse,
  HttpUserEvent,
  HttpInterceptor
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PoNotificationService } from '@po-ui/ng-components';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {
  constructor(private thfNotification: PoNotificationService,
    private loginService: LoginService,
    private configService: ConfigService,
    private router: Router
  ) {
  }
  private isRefreshingToken = false;
  //private tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {
    //console.log(request)
    // Adiciona o HOST na URL para utilizar um arquivo config.json quando fazer o build do projeto
    request = request.clone({ url: `${this.configService.getHostRest()}/${request.url}` });
    //console.log(request.url)

    let dataAtual = new Date()
    let dataExpire = new Date(sessionStorage.getItem('expires_date') || "")

    // Caso venceu o token faz o refresh
    if (!request.url.includes('/assets/config.json') && !this.isRefreshingToken && dataAtual >= dataExpire && sessionStorage.getItem('access_token')) {

      this.isRefreshingToken = true;

      return this.loginService.refresh(sessionStorage.getItem('refreshtoken') || "")
        .pipe(take(1),
          switchMap((data) => {
            if (data) {
              sessionStorage.setItem('access_token', data['access_token'])
              this.loginService.setNextDataRefreshToken(data['expires_in'])
              return next.handle(this.addTokenToRequest(request));
            }
            return throwError(() => data);
          }),
          catchError(err => {
            return throwError(() => err);
          }),
          finalize(() => {
            this.isRefreshingToken = false;
          })
        );

    }

    // Adiciona o Token nas requisições
    if (!this.isRefreshingToken && sessionStorage.getItem('access_token')) {
      request = this.addTokenToRequest(request)
    }


    return next.handle(request)
      .pipe(
        catchError(err => {
          const erroCode = err.status;
          let cMessageCustomErro = '';

          // console.log(err)
          let cMsgRet = err.status + ' - ';
          if (err) {
            if (err.error.errorMessage) {
              cMsgRet += err.error.errorMessage;
            } else if (err.error.message) {
              cMsgRet += err.error.message;
            } else {
              cMsgRet += err.message;
            }
          }
          if (err instanceof HttpErrorResponse) {

            if (erroCode == 0) {
              cMessageCustomErro = 'Nosso servidor não está respondendo'

            } else if (erroCode == 500) {
              cMessageCustomErro = 'Aconteceu um erro interno no servidor'
            } else if (erroCode == 401) {
              this.loginService.logout()
            }

            if (cMessageCustomErro) {
              cMsgRet = cMessageCustomErro
            }

          }

          this.thfNotification.error({ message: cMsgRet });

          return throwError(() => cMsgRet)
        }));
  }


  private addTokenToRequest(request: HttpRequest<any>): HttpRequest<any> {
    const headers = {
      'Accept': 'application/json; charset=UTF-8', // Quando enviado isso, o Protheus entende que deve converter para UTF8
      'Content-Type': 'application/json', // Solicita que a comunicação seja no formato JSON
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'), // Envia o TOKEN de autenticação
      'X-Portinari-No-Count-Pending-Requests': 'false' // Não realiza a contagem
    };
    //console.log(this.configService.getHostRest())
    //console.log(`${this.configService.getHostRest()}/${request.url}`)
    //console.log(request.params)
    return request.clone({ setHeaders: headers });
  }


}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})


export class Interceptor { }
