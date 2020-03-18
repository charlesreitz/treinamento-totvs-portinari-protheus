import { ConfigService } from './config.service';
import { Router } from '@angular/router';
import { LoginService } from './../login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Injectable, NgModule } from '@angular/core';
import { Observable, BehaviorSubject, Subject, throwError } from 'rxjs';
import { switchMap, map, filter, catchError, take, finalize, mergeMap } from 'rxjs/operators';
import {
    HttpRequest, HttpHandler, HttpEvent, HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpErrorResponse,
    HttpUserEvent,
    HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PoNotificationService } from '@portinari/portinari-ui';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {
    constructor(private thfNotification: PoNotificationService,
        private loginService: LoginService,
        private configService: ConfigService,
        private router: Router,
        private cookieService: CookieService) {
    }
    private isRefreshingToken = false;
    private tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {


        let dataAtual = new Date()
        let dataExpire = new Date(this.cookieService.get('expires_date'))
        if (!this.isRefreshingToken && dataAtual >= dataExpire && this.cookieService.get('access_token')) {
            return this.handle401Error(request, next)
        }

        return next.handle(this.addTokenToRequest(request, this.cookieService.get('access_token')))
            .pipe(
                catchError(err => {
                    let cMsgRet = err.status + ' - ';
                    if (err.error.errorMessage) {
                        cMsgRet += err.error.errorMessage
                    } else if (err.error.message) {
                        cMsgRet += err.error.message
                    } else {
                        cMsgRet += err.message
                    }
                    if (err instanceof HttpErrorResponse) {
                        switch ((<HttpErrorResponse>err).status) {
                            case 0:
                                this.thfNotification.error({ message: "Ops! Nosso servidor não está respondendo" });
                                return throwError(cMsgRet);
                            case 401:
                                this.router.navigate(['/login']);
                                this.thfNotification.error({ message: cMsgRet });
                                this.loginService.logout()
                                return throwError(cMsgRet);

                            case 400:
                                this.thfNotification.error({ message: cMsgRet });
                                return throwError(cMsgRet);
                            default:
                                this.thfNotification.error({ message: cMsgRet });
                                return throwError(cMsgRet);
                        }
                    } else {
                        this.thfNotification.error({ message: cMsgRet });
                        return throwError(cMsgRet);


                    }
                }));
    }


    private addTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
        const headers = {
            'Accept': 'application/json; charset=UTF-8', // Quando enviado isso, o Protheus entende que deve converter para UTF8
            'Content-Type': 'application/json', // Solicita que a comunicação seja no formato JSON
            'Authorization': 'Bearer ' + token, // Envia o TOKEN de autenticação
            'X-Portinari-No-Count-Pending-Requests': 'false' // Não realiza a contagem 
        };
        return request.clone({ setHeaders: headers, url: `${this.configService.getHostRest()}/${request.url}` });
    }


    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        this.isRefreshingToken = true;

        return this.loginService.refresh(this.cookieService.get('refreshtoken'))
            .pipe(
                switchMap((data) => {
                    if (data) {
                        this.tokenSubject.next(data['access_token']);
                        this.cookieService.set('access_token', data['access_token'], undefined, '/');
                        this.loginService.setNextDataRefreshToken(data['expires_in'])
                        return next.handle(this.addTokenToRequest(request, data['access_token']));
                    }
                    return throwError(data);
                }),
                catchError(err => {
                    return throwError(err);
                }),
                finalize(() => {
                    this.isRefreshingToken = false;
                })
            );

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