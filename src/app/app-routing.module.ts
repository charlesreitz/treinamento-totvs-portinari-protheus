import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: 'home', component: HomeComponent,  canActivate: [LoginComponent] } ,
  { path: 'login', component: LoginComponent } ,
  { path: '',  redirectTo: 'home',  pathMatch: 'full',  canActivate: [LoginComponent] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
