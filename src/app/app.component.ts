import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';
import { LoginComponent } from './login/login.component';

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

  private onClick() {
    alert('Clicked in menu item')
  }

}
