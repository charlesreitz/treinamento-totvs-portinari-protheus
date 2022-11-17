import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { environment } from './../environments/environment';
import { ConfigService } from './shared/config.service';
import { Interceptor } from './shared/interceptor.module';
import { NgModule, LOCALE_ID, APP_INITIALIZER, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { registerLocaleData, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { switchMap, map, filter, catchError, take, finalize, mergeMap } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subject, ObservableInput, throwError } from 'rxjs';
import { of } from '../../node_modules/rxjs';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import ptBr from '@angular/common/locales/pt';
import { LoginService } from './login/login.service';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClienteListComponent,
    ClienteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    Interceptor,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoginService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // {
    //   provide: APP_INITIALIZER, useFactory: load, multi: true, deps: [
    //     HttpClient,
    //     ConfigService
    //   ],
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



/**
 * Verifica se existe o arquivo config.json para definir a URL da API que vai ser utilizada para comunicação
 * @param http
 * @param config
 */
// export function load(http: HttpClient, config: ConfigService): (() => Promise<boolean>) {
//   return (): Promise<boolean> => {
//     return new Promise<boolean>((resolve: (a: boolean) => void): void => {
//       http.get('./assets/config.json')
//         .pipe(
//           map((x: ConfigService) => {
//             config.apibaseUrl = x.apibaseUrl;
//             resolve(true);
//           }),
//           take(1),
//           catchError((x: { status: number }, caught: Observable<void>): ObservableInput<{}> => {
//             if (x.status !== 404) {
//               resolve(false);
//             }
//             config.apibaseUrl = environment.baseUrl;
//             resolve(true);
//             return of({});
//           })
//         ).subscribe();
//     });
//   };
// }
