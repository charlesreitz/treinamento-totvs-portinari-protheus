import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  PoPageLogin
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    console.log('Init')
  }



  async loginSubmit(formData: PoPageLogin) {
    let login = formData.login
    let password = formData.password

    const retorno = await this.loginService.login(login, password).toPromise()
    console.log(retorno)
    if (retorno) {
      sessionStorage.setItem('refreshtoken', retorno['refresh_token']);
      sessionStorage.setItem('access_token', retorno['access_token']);
      this.loginService.setNextDataRefreshToken(retorno['expires_in'])
      this.router.navigate(['/home']);
    }

  }




}
