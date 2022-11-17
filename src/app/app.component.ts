import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { PoMenuItem } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public loginService: LoginService, private router: Router) { }
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: './home' },
    {
      label: 'Cliente', link: './client-list'
    },
    {
      label: 'Sair',
      action: () => (
        this.loginService.logout(),
        this.router.navigate([`login`])
      )
    },
  ];

}
