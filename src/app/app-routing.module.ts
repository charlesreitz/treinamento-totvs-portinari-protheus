import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent,  canActivate: [LoginComponent] } ,
  { path: 'login', component: LoginComponent } ,
  { path: 'client-list', component: ClienteListComponent } ,
  { path: 'client-edit', component: ClienteEditComponent } ,
  { path: '',  redirectTo: 'home',  pathMatch: 'full',  canActivate: [LoginComponent] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
