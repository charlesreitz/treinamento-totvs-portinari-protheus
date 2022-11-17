import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  private headers = {
    'X-Portinari-No-Count-Pending-Requests': 'false',
    'X-Portinari-Screen-Lock': 'true'
  };


  public isLogged() {
    return sessionStorage.getItem('access_token');
  }

  logout() {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refreshtoken');
    sessionStorage.removeItem('expires_date');
  }

  login(username: string, password: string) {
    return this.http.post<any>(`api/oauth2/v1/token`,
      {},
      {
        headers: this.headers,
        params: {
          grant_type: 'password',
          password: password,
          username: username
        }
      })
  }

  setNextDataRefreshToken(secondsExpire: number) {
    let dataatual = new Date()
    dataatual.setSeconds(dataatual.getSeconds() + secondsExpire - 60);
    sessionStorage.setItem('expires_date',dataatual.toString())
    return dataatual;
  }


  refresh(refresh_token: string) {
    return this.http.post<any>(`api/oauth2/v1/token`, {}, { headers: this.headers, params: { grant_type: 'refresh_token', refresh_token: refresh_token } })
  }


}
