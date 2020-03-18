import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private cookieService: CookieService,
    private http: HttpClient) { }
  private headers = { 'X-Portinari-No-Count-Pending-Requests': 'false', 'X-Portinari-Screen-Lock': 'true' };


  public isLogged() {
    return this.cookieService.get('access_token');
  }

  logout() {
    //this.cookieService.deleteAll('/login');
    this.cookieService.delete('access_token');
    this.cookieService.delete('refreshtoken');
    this.cookieService.delete('expires_date');
  }

  login(username: string, password: string) {
    return this.http.post<any>(`api/oauth2/v1/token`,{},{headers:this.headers, params: {grant_type:'password',password:password,username:username} })
  }

  setNextDataRefreshToken(secondsExpire) {
    let dataatual = new Date()
    dataatual.setSeconds(dataatual.getSeconds() + secondsExpire - 60);
    this.cookieService.set('expires_date', dataatual.toString(), undefined, '/');
    return dataatual;
  }


  refresh(refresh_token) {
    return this.http.post<any>(`api/oauth2/v1/token`, {}, { headers: this.headers, params: { grant_type: 'refresh_token', refresh_token: refresh_token } })
  }


}
