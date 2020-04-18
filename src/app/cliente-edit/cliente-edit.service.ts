import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteEditService {
  private readonly headers = { 'X-Portinari-No-Count-Pending-Requests': 'false', 'X-Portinari-Screen-Lock': 'true' };

  constructor(private http: HttpClient) { }

  getId(A1_COD: string, A1_LOJA: string){
    return this.http.get(`cliente/v1/${A1_COD}/${A1_LOJA}`,     {  headers: this.headers });
  }


  post(DATA) {
    return this.http.post<any>(`/cliente/v1`, DATA, { headers: this.headers });
  }

  put(DATA, A1_COD: string, A1_LOJA: string) {
    return this.http.put<any>(`/cliente/v1/${A1_COD}/${A1_LOJA}`, DATA, { headers: this.headers });
  }


}
