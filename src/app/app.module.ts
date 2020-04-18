import { environment } from './../environments/environment';
import { ConfigService } from './helpers/config.service';
import { Interceptor } from './helpers/interceptor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { registerLocaleData, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@portinari/portinari-templates';
import { PoPageLoginModule } from '@portinari/portinari-templates';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { switchMap, map, filter, catchError, take, finalize, mergeMap } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subject, ObservableInput, throwError } from 'rxjs';
import { of } from '../../node_modules/rxjs';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    CookieService,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: APP_INITIALIZER, useFactory: load, multi: true, deps: [
        HttpClient,
        ConfigService
        
      ],
    },
    LoginComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * Verifica se existe o arquivo config.json para definir a URL da API que vai ser utilizada para comunicação 
 * @param http 
 * @param config 
 */
export function load(http: HttpClient, config: ConfigService): (() => Promise<boolean>) {
  return (): Promise<boolean> => {
    return new Promise<boolean>((resolve: (a: boolean) => void): void => {
      http.get('./assets/config.json')
        .pipe(
          map((x: ConfigService) => {
            config.apibaseUrl = x.apibaseUrl;
            resolve(true);
          }),
          take(1),
          catchError((x: { status: number }, caught: Observable<void>): ObservableInput<{}> => {
            if (x.status !== 404) {
              resolve(false);
            }
            config.apibaseUrl = environment.baseUrl;
            resolve(true);
            return of({});
          })
        ).subscribe();
    });
  };
}