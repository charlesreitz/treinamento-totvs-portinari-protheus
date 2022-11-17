import { LoginService } from './../../old/src/app/login/login.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent, canActivate: [LoginService] },
  { path: 'login', component: LoginService },
  {
    path: 'client-list', component: ClienteListComponent,
    canActivate: [LoginService]
  },
  {
    path: 'client-edit',
    component: ClienteEditComponent,
    canActivate: [LoginService]
  },
  { path: 'client-edit/:A1_COD/:A1_LOJA', component: ClienteEditComponent, canActivate: [LoginService] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
