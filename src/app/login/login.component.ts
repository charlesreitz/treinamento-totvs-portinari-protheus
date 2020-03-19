import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {
  PoPageLogin, PoPageLoginRecovery, PoModalPasswordRecoveryType, PoModalPasswordRecovery,
  PoModalPasswordRecoveryComponent
} from '@portinari/portinari-templates';
import { PoNotificationService, PoModalAction, PoModalComponent } from '@portinari/portinari-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router,
    private cookieService: CookieService,
    private loginService: LoginService,
    private thfNotification: PoNotificationService) { }

  ngOnInit() {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    // const allowedRoles = route.data.allowedRoles;

    if (!this.loginService.isLogged()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  public loginSubmit(formData: PoPageLogin) {
    let login = formData.login
    let password = formData.password

    this.loginService.login(login, password).pipe(take(1)).subscribe(
      (data: Array<object>) => {
        this.loginService.setNextDataRefreshToken(data['expires_in'])
        this.cookieService.set('refreshtoken', data['refresh_token'], undefined, '/');
        this.cookieService.set('access_token', data['access_token'], undefined, '/');

        this.router.navigate(['/home']);
      });
  }


}
